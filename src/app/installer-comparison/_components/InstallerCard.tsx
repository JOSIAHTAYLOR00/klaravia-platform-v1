"use client";

import { Star, Clock, Award, ChevronRight, CheckCircle, AwardIcon, Heart, Leaf, Monitor, Shield, Timer, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Installer } from "@/API";
import { UserWithoutTypeName } from "@/types/user";
import Image from "next/image";

interface InstallerCardProps {
  installer: Installer;
  userData: UserWithoutTypeName;
  handleInstallerChosen: (value: Installer) => void;
  setSelectedInstaller: (value: Installer) => void;
}

const DifferentiatorIcon = ({ feature }: { feature: string }) => {
  const iconProps = { className: "w-4 h-4 mr-2" };
  switch (feature) {
    case "postInstallationSupport":
      return <Shield {...iconProps} />;
    case "warrantyPolicies":
      return <CheckCircle {...iconProps} />;
    case "emergencyRepair":
      return <Wrench {...iconProps} />;
    case "projectTimeline":
      return <Timer {...iconProps} />;
    case "technologyIntegration":
      return <Monitor {...iconProps} />;
    case "sustainabilityPractices":
      return <Leaf {...iconProps} />;
    case "communityPartnerships":
      return <Heart {...iconProps} />;
    default:
      return <AwardIcon {...iconProps} />;
  }
};

export const InstallerCard = ({ installer, userData, handleInstallerChosen, setSelectedInstaller }: InstallerCardProps) => {
  if (!installer || !installer.available_batteries || !installer.available_batteries[0] || !installer.available_batteries[0].additional_cost) {
    return null;
  }

  const featureLabels: Record<string, string> = {
    postInstallationSupport: "Post-Installation Support",
    warrantyPolicies: "Warranty Policies",
    emergencyRepair: "Emergency Repair Services",
    projectTimeline: "Project Timeline Commitments",
    roofExperience: "Experience with Specific Roof Types",
    technologyIntegration: "Technology Integration",
    communityPartnerships: "Community Partnerships",
    sustainabilityPractices: "Sustainability Practices",
    customerSatisfactionGuarantee: "Customer Satisfaction Guarantee",
    productionGuarantee: "Production Guarantee",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => setSelectedInstaller(installer)}
      className="bg-white dark:bg-surface-dark-layer-5 hover:bg-blue-500/10 dark:hover:bg-surface-dark-layer-10 transition-colors border-2 border-main/50 dark:border-dark-layer-50 hover:border-blue-600 dark:hover:border-blue-600 rounded-lg p-6 cursor-pointer"
    >
      <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-between">
        <div className="flex gap-4">
          {/* Company Image */}
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              // TODO: implement fallback logo
              width={100}
              height={100}
              src={installer.company_cover_image_url || "/placeholder-logo.png"}
              alt={installer.company_name || "installer logo"}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-main dark:text-blue-50 mb-2">{installer.company_name}</h2>
            <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={{ base: 2, md: 6 }} className="text-main/70 dark:text-blue-50/70">
              <span className="flex items-center">
                <Star className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" />
                {installer.installer_rating}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {installer.average_install_time} days avg. install time
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                {installer.years_in_business} years experience
              </span>
            </Box>
          </div>
        </div>
        <Box mt={{ base: 4, md: 0 }} className="text-right">
          <div className="text-3xl font-bold text-main dark:text-blue-50 mb-1">
            $
            {userData.requires_battery && userData.requires_battery === true
              ? (
                  (Number(installer.company_red_line) * 1000 * userData?.google_system_size + 400 * Number(userData?.google_system_size)) * 0.7 +
                  installer.available_batteries[0].additional_cost
                ).toLocaleString()
              : ((Number(installer.company_red_line) * 1000 * userData?.google_system_size + 400 * Number(userData?.google_system_size)) * 0.7).toLocaleString()}
          </div>
          <div className="text-main/50 dark:text-blue-50/50 text-sm">Total cost after incentives</div>
        </Box>
      </Box>

      {/* New Differentiators Section */}
      {/* <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-semibold text-main dark:text-blue-50 mb-3">Highlights & Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {installer.differentiators && Object.entries(
            installer.differentiators.map(
              ([key, value]: [string, string]) =>
                value && (
                  <div key={key} className="flex items-center text-sm text-main/70 dark:text-blue-50/70">
                    <DifferentiatorIcon feature={key} />
                    {featureLabels[key]}
                  </div>
                )
            )
          )}
        </div>
      </div> */}

      {/* Actions */}
      <div className="flex justify-between items-center mt-4">
        <button onClick={() => setSelectedInstaller(installer)} className="text-amber-500 hover:text-amber-400 transition-colors flex items-center">
          View Details
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleInstallerChosen(installer);
          }}
          className="bg-amber-500 text-main px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
        >
          Use Installer
        </button>
      </div>
    </motion.div>
  );
};
