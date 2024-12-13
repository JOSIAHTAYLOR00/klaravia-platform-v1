import { HStack, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export const NotificationCard = ({ router, onClose, setMessageCount }: { router: any; onClose: () => void; setMessageCount: (count: number) => void }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => {
      router.push(`/user/support-chat`);
      onClose();
      setMessageCount(0);
    }}
    className="w-full p-4 rounded-lg cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600
      hover:from-amber-600 hover:to-amber-700 border border-white/10 shadow-lg transition-all duration-200"
  >
    <HStack spacing={3} align="start">
      <div className="p-2 bg-white/10 rounded-full">
        <MessageSquare className="w-4 h-4 text-white" />
      </div>
      <VStack align="start" spacing={1}>
        <Text className="text-white font-medium">New Message</Text>
        <Text className="text-white/80 text-sm">You have received a new message from Klaravia support.</Text>
        <Text className="text-white/60 text-xs">Just now</Text>
      </VStack>
    </HStack>
  </motion.div>
);
