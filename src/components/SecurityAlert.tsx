"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, X, Terminal, Wifi } from "lucide-react";
import { securityAlerts } from "@/data/content";

export function SecurityAlert() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"alert" | "scanning" | "fact">("alert");
  const [alert] = useState(
    () => securityAlerts[Math.floor(Math.random() * securityAlerts.length)]
  );
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "scanning") {
      const interval = setInterval(() => {
        setScanProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase("fact"), 400);
            return 100;
          }
          return p + 4;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md rounded-2xl bg-ink border border-rust/40 shadow-2xl overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-rust/20 border-b border-rust/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="font-mono text-xs text-cream/60 ml-1">
                  security-monitor.sh
                </span>
              </div>

              <div className="p-6">
                {phase === "alert" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rust/20">
                        <ShieldAlert size={20} className="text-rust" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-rust uppercase tracking-wider mb-1">
                          ⚠ Threat Detected
                        </p>
                        <h2 className="font-display text-xl text-cream leading-snug">
                          {alert.title}
                        </h2>
                      </div>
                    </div>

                    <div className="font-mono text-xs text-cream/50 mb-3 flex items-center gap-2">
                      <Wifi size={12} />
                      Source IP: {alert.ip}
                    </div>

                    <p className="font-body text-sm text-cream/70 leading-relaxed mb-6">
                      {alert.detail}
                    </p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setPhase("scanning")}
                        className="flex-1 rounded-lg bg-rust px-4 py-2.5 font-body text-sm font-medium text-cream hover:bg-rust-soft transition-colors cursor-pointer"
                      >
                        {alert.action}
                      </button>
                      <button
                        onClick={() => setPhase("scanning")}
                        className="rounded-lg border border-cream/20 px-4 py-2.5 font-body text-sm text-cream/60 hover:text-cream hover:border-cream/40 transition-colors cursor-pointer"
                      >
                        Ignore
                      </button>
                    </div>
                  </motion.div>
                )}

                {phase === "scanning" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-2"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Terminal size={16} className="text-rust" />
                      <span className="font-mono text-xs text-cream/60">
                        Running diagnostic scan...
                      </span>
                    </div>
                    <div className="space-y-2 font-mono text-xs text-cream/50 mb-6">
                      {scanProgress > 10 && <p>→ Checking ARP table...</p>}
                      {scanProgress > 30 && <p>→ Scanning open ports...</p>}
                      {scanProgress > 50 && <p>→ Analyzing DNS queries...</p>}
                      {scanProgress > 70 && (
                        <p>→ Cross-referencing CVE database...</p>
                      )}
                      {scanProgress > 90 && (
                        <p className="text-rust">→ Finding something interesting...</p>
                      )}
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-cream/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-rust rounded-full"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                    <p className="font-mono text-xs text-cream/30 mt-2 text-right">
                      {scanProgress}%
                    </p>
                  </motion.div>
                )}

                {phase === "fact" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg">💡</span>
                      <p className="font-mono text-xs text-rust uppercase tracking-wider">
                        Security fact
                      </p>
                    </div>
                    <p className="font-display text-lg text-cream leading-snug mb-6">
                      {alert.funFact}
                    </p>
                    <p className="font-mono text-xs text-cream/40 mb-5">
                      — brought to you by someone who actually ran these scans
                    </p>
                    <button
                      onClick={() => setVisible(false)}
                      className="w-full rounded-lg bg-cream/10 hover:bg-cream/20 px-4 py-2.5 font-body text-sm text-cream transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <X size={14} />
                      Enter the portfolio
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
