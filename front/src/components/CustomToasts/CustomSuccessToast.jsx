import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export const CustomSuccessToast = (message) => {
  toast.custom(
    (t) => (
      <AnimatePresence>
        {t.visible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="mt-[7dvh] flex items-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-lg shadow-md border-l-4 border-green-500"
          >
            <span className="text-sm font-semibold">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    ),
    { position: "top-right" },
  );
};
