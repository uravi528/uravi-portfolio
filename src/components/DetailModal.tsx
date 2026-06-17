"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  body: string;
  link?: string;
  accentClass: string; // tailwind bg class for the icon chip
};

export function DetailModal({
  isOpen,
  onClose,
  icon,
  title,
  subtitle,
  body,
  link,
  accentClass,
}: DetailModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
          >
            <div
              className="w-full max-w-lg rounded-2xl bg-cream border border-line shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accentClass}`}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3
                      id="modal-title"
                      className="font-display text-xl sm:text-2xl leading-tight text-ink"
                    >
                      {title}
                    </h3>
                    {subtitle && (
                      <p className="font-mono text-xs text-ink-soft mt-1">
                        {subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="shrink-0 rounded-full p-2 text-ink-soft hover:text-ink hover:bg-cream-warm transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="font-body text-[15px] leading-relaxed text-ink-soft">
                {body}
              </p>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-rust hover:text-rust-soft transition-colors"
                >
                  View live
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
