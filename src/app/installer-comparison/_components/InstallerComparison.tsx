"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";
import { useGetUser, useListInstallers } from "@/hooks/userHooks";
import { useUserDataContext } from "@/providers/UserDataProvider";
import { DetailModal } from "./DetailModal";
import InstallerComparisonFallback from "./InstallerComparisonFallback";
import { Installer, UserUpdateOptions } from "@/API";
import { useAuth } from "@/hooks/useAuth";
import { InstallerCard } from "./InstallerCard";
import SignUpModal from "@/app/(auth)/_components/SignUpModal";
import { UserWithoutTypeName } from "@/types/user";
import AuthModals from "@/app/(auth)/_components/AuthModals";

export default function InstallerComparison() {
  const [selectedInstaller, setSelectedInstaller] = useState<Installer | null>(null);
  const [sortBy, setSortBy] = useState<"price" | "rating" | "speed">("price");
  const [installers, setInstallers] = useState<Installer[] | null>(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [selectedInstallerForSignup, setSelectedInstallerForSignup] = useState<Installer | null>(null);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const { userData, setUserData } = useUserDataContext();
  const { data: installerList, loading: isLoading } = useListInstallers();
  const { data: queriedUserData, loading: queriedUserDataIsLoading } = useGetUser({ variables: { id: user?.userId || "" } });
  console.log("queried", user, queriedUserData);
  useEffect(() => {
    if (installerList && installerList.listInstallers && installerList.listInstallers.items && installerList.listInstallers.items.length > 0) {
      const installersToBeSorted = [...installerList.listInstallers.items];
      const validInstallerEntries = installersToBeSorted.filter((item): item is Installer => item !== null);
      const sortedInstallers = validInstallerEntries.sort((a, b) => {
        const fieldA = a.company_red_line ?? 0;
        const fieldB = b.company_red_line ?? 0;
        return fieldB - fieldA;
      });
      setInstallers(sortedInstallers);
    }
  }, [installerList]);

  const filterInstallers = (filter: React.ChangeEvent<HTMLSelectElement>) => {
    if (!installers) return;

    setSortBy(filter.target.value as "price" | "rating" | "speed");
    const sortedInstallers = [...installers];

    switch (filter.target.value) {
      case "price":
        setInstallers(
          sortedInstallers.sort((a, b) => {
            const fieldA = a.company_red_line ?? 0;
            const fieldB = b.company_red_line ?? 0;
            return fieldB - fieldA;
          })
        );
        break;
      case "rating":
        setInstallers(
          sortedInstallers.sort((a, b) => {
            const fieldA = a.installer_rating ?? 0;
            const fieldB = b.installer_rating ?? 0;
            return fieldB - fieldA;
          })
        );
        break;
      case "speed":
        setInstallers(
          sortedInstallers.sort((a, b) => {
            const fieldA = a.average_install_time ?? 0;
            const fieldB = b.average_install_time ?? 0;
            return fieldB - fieldA;
          })
        );
        break;
    }
  };

  const handleInstallerChosen = async (chosenInstaller: Installer) => {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      setSelectedInstallerForSignup(chosenInstaller);
      setIsSignUpModalOpen(true);
      return;
    }

    setUserData((prevUserData: any) => {
      const newData = {
        ...prevUserData,
        installerId: chosenInstaller.id,
        installerSalesforceId: chosenInstaller.salesforceId,
        updated_by: UserUpdateOptions.DYNAMO,
      };

      if (JSON.stringify(prevUserData) !== JSON.stringify(newData)) {
        return newData;
      }
      return prevUserData;
    });

    router.push("/bill-upload");
  };

  const handleSignupSuccess = () => {
    setIsSignUpModalOpen(false);
    if (selectedInstallerForSignup) {
      handleInstallerChosen(selectedInstallerForSignup);
    }
  };

  if (isLoading || queriedUserDataIsLoading) {
    return <InstallerComparisonFallback />;
  }

  if (!userData.google_system_size) {
    if (queriedUserData && queriedUserData.getUser && queriedUserData.getUser.google_system_size) {
      setUserData(queriedUserData.getUser as UserWithoutTypeName);
    }
    console.log("no system size");
  }

  if (!installers) {
    // TODO: Show no installers found component
    return null;
  }

  console.log("clicked", selectedInstaller);

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-main dark:text-blue-50 mb-4">Choose Your Install Company</h1>
          <p className="text-xl text-main/70 dark:text-blue-50/70">Choose from our network of vetted, high-quality installers</p>
        </div>

        {/* Filters & Sorting */}
        <div className="rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <select value={sortBy} onChange={filterInstallers} className="border-2 px-2 border-layer-10 dark:border-dark-layer-10 rounded-lg  py-2 text-main dark:text-blue-50">
                <option value="price">Lowest Price</option>
                <option value="rating">Highest Rated</option>
                <option value="speed">Fastest Installation</option>
              </select>
            </div>
            <div className="mt-2 md:mt-0 text-main dark:text-blue-50/50">Showing {installers.length} qualified installers</div>
          </div>
        </div>

        {/* Installer Cards */}
        <div className="grid gap-6">
          {installers.map((installer) => (
            <InstallerCard key={installer.id} installer={installer} userData={userData} handleInstallerChosen={handleInstallerChosen} setSelectedInstaller={setSelectedInstaller} />
          ))}
        </div>

        {/* Quality Guarantee */}
        <div className="mt-12 bg-blue-500/10 rounded-lg p-6 flex items-start space-x-4">
          <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-main dark:text-blue-50 mb-1">Klaravia Quality Guarantee</h3>
            <p className="text-main/70 dark:text-blue-50/70">
              All installation partners are thoroughly vetted, licensed, and insured. We monitor performance and customer satisfaction to ensure the highest quality service.
            </p>
          </div>
        </div>

        {/* Modals */}
        {selectedInstaller && (
          <DetailModal
            installer={selectedInstaller}
            onClose={() => setSelectedInstaller(null)}
            handleInstallerChosen={handleInstallerChosen}
            userData={userData}
            setUserData={setUserData}
          />
        )}

        <AuthModals
          isOpen={isSignUpModalOpen}
          onClose={() => {
            setIsSignUpModalOpen(false);
            setSelectedInstallerForSignup(null);
          }}
          onSignUpSuccess={handleSignupSuccess}
          installer={selectedInstallerForSignup}
        />
      </div>
    </div>
  );
}
