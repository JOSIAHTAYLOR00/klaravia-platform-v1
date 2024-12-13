import { DrawerHeader, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export const NotificationsHeader = ({ onClose }: { onClose: () => void }) => (
  <DrawerHeader bgColor="#121212">
    <HStack justify="space-between">
      <Text className="text-blue-50 font-medium">Notifications</Text>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
        <X className="w-5 h-5 text-blue-50/70" />
      </motion.button>
    </HStack>
  </DrawerHeader>
);
