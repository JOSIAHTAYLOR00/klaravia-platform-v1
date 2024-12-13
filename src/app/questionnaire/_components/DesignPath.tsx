"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Settings, Sliders, Sparkles, Wand2 } from "lucide-react";

// import { CSignUpModal } from '@/components/signup-modal';
import { useAuth } from "@/hooks/useAuth";
import { useUserDataContext } from "@/providers/UserDataProvider";
import { useListInstallers } from "@/hooks/userHooks";
import { Installer, UserUpdateOptions } from "@/API";
import { SignUpModal } from "@/app/(auth)/_components/SignUpModal";
import Navbar from "@/app/components/Navbar";
import AuthModals from "@/app/(auth)/_components/AuthModals";

interface DesignPathProps {
  onPrevious: () => void;
}

const FEATURES = {
  simple: ["Expert system design", "Optimized for your home", "Quick and easy process"],
  advanced: ["Full system customization", "Detailed specifications", "Interactive design process"],
} as const;

export default function DesignPath({ onPrevious }: DesignPathProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { setUserData } = useUserDataContext();
  const { data: installers } = useListInstallers();

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [selectedInstallerForSignup, setSelectedInstallerForSignup] = useState<Installer | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!installers?.listInstallers?.items) return;

    const cheapestInstaller = [...installers.listInstallers.items].sort((a, b) => {
      if (!a || !b) return 0;
      if (!a.company_red_line) return 1;
      if (!b.company_red_line) return -1;
      return a.company_red_line - b.company_red_line;
    })[0];

    if (cheapestInstaller) {
      setSelectedInstallerForSignup(cheapestInstaller as Installer);
    }
  }, [installers]);

  const handleSignupSuccess = () => {
    setIsSignUpModalOpen(false);
    if (selectedInstallerForSignup) {
      handleInstallerChosen(selectedInstallerForSignup);
    }
  };

  const handleInstallerChosen = async (chosenInstaller: Installer) => {
    setSelectedInstallerForSignup(chosenInstaller);

    const authenticated = await isAuthenticated();
    if (!authenticated) {
      setIsSignUpModalOpen(true);
      return;
    }

    setUserData((prevUserData: any) => {
      const newUserData = {
        ...prevUserData,
        installerId: chosenInstaller.id,
        installerSalesforceId: chosenInstaller.salesforceId,
        updated_by: UserUpdateOptions.DYNAMO,
      };

      if (JSON.stringify(prevUserData) !== JSON.stringify(newUserData)) {
        return newUserData;
      }
      return prevUserData;
    });

    router.push("/bill-upload");
  };

  const handleSimpleSelected = async () => {
    if (!installers?.listInstallers?.items) return;

    const cheapestInstaller = [...installers.listInstallers.items].sort((a, b) => {
      if (!a || !b) return 0;
      if (!a.company_red_line) return 1;
      if (!b.company_red_line) return -1;
      return a.company_red_line - b.company_red_line;
    })[0];

    if (cheapestInstaller) {
      setSelectedInstallerForSignup(cheapestInstaller as Installer);
    }

    const authenticated = await isAuthenticated();
    if (!authenticated) {
      setIsSignUpModalOpen(true);
      return;
    }
  };

  return (
    <section className="min-h-screen flex px-4 py-12 items-center">
      <Navbar />
      <div className="max-w-6xl mx-auto w-full">
        <div className="w-full py-8">
          <div>
            <h2 className="text-4xl font-bold text-main dark:text-blue-50 mb-4">Choose Your Design Experience</h2>
            <p className="text-main/70 dark:text-blue-50/70 mb-8">Select how you&apos;d like to proceed with your solar system design</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <DesignOption
              title="Simple"
              description="Let us handle the details. We'll design an optimal system based on your needs."
              icon={<Wand2 className="w-8 h-8 text-amber-500" />}
              iconBgColor="bg-amber-500/10"
              features={FEATURES.simple}
              featureIcon={<Sparkles className="w-4 h-4 mr-2 text-amber-500" />}
              onClick={handleSimpleSelected}
              initial={{ opacity: 0, x: -20 }}
            />

            <DesignOption
              title="Advanced"
              description="Customize your system on your own before ordering a professional design."
              icon={<Settings className="w-8 h-8 text-blue-400" />}
              iconBgColor="bg-blue-500/10"
              features={FEATURES.advanced}
              featureIcon={<Sliders className="w-4 h-4 mr-2 text-blue-400" />}
              onClick={() => router.push("/loading-estimates")}
              initial={{ opacity: 0, x: 20 }}
            />
          </div>

          <div className="flex justify-between items-center pt-8">
            <button onClick={onPrevious} className="flex items-center text-main/70 hover:text-main dark:text-blue-50/70 dark:hover:text-blue-50 transition-colors">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
          </div>

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
    </section>
  );
}

interface DesignOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  features: readonly string[];
  featureIcon: React.ReactNode;
  onClick: () => void;
  initial: {
    opacity: number;
    x: number;
  };
}

function DesignOption({ title, description, icon, iconBgColor, features, featureIcon, onClick, initial }: DesignOptionProps) {
  return (
    <motion.button
      initial={initial}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-gray-50 shadow-xl dark:bg-surface-dark-layer-5 backdrop-blur-sm rounded-lg p-8 border border-surface-layer-10 dark:border-surface-dark-layer-10 text-left transition-colors hover:bg-blue-500/5 dark:hover:bg-white/10 group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className={`rounded-full p-3 ${iconBgColor}`}>{icon}</div>
        <ChevronRight className="w-6 h-6 text-white/0 group-hover:text-main/50 dark:group-hover:text-white/50 transition-all" />
      </div>
      <h3 className="text-2xl font-bold text-main dark:text-blue-50 mb-3">{title}</h3>
      <p className="text-main/70 dark:text-blue-50/70 mb-6">{description}</p>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-main/60 dark:text-blue-50/60">
            {featureIcon}
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.button>
  );
}
