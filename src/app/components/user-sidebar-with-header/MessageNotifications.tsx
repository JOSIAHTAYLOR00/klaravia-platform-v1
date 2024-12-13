import { motion } from "framer-motion";
import { NotificationCard } from "./NotificationCard";

export const MessageNotifications = ({
  count,
  router,
  onClose,
  setMessageCount,
}: {
  count: number;
  router: any;
  onClose: () => void;
  setMessageCount: (count: number) => void;
}) => (
  <>
    {Array.from({ length: count }, (_, i) => (
      <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="w-full">
        <NotificationCard router={router} onClose={onClose} setMessageCount={setMessageCount} />
      </motion.div>
    ))}
  </>
);
