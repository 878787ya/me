import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ExpandedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ExpandedModal: React.FC<ExpandedModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
          {/* Backdrop Blur */}
          {/* Removed 'transition-all' to prevent conflict with Framer Motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full h-[100dvh] md:h-[90vh] md:max-w-7xl bg-white md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button (Sticky) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex-1 w-full h-full overflow-hidden">
                {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};