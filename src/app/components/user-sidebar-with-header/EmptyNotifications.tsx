import { VStack, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export const EmptyNotifications = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
    <VStack className="w-full p-6 rounded-lg bg-white/5 border border-white/10" spacing={4}>
      <Box className="p-4 rounded-full bg-white/5">
        <Bell className="w-6 h-6 text-blue-50/50" />
      </Box>
      <Text className="text-blue-50/70 text-center">No new notifications</Text>
    </VStack>
  </motion.div>
);
