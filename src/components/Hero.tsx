"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="flex items-center gap-2.5 mb-6">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-rust">
          <motion.path
            d="M4 4v7M4 4h7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          />
          <motion.path
            d="M20 20v-7M20 20h-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          />
        </svg>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink-soft/70">
          Uravi Patel
        </p>
      </motion.div>

      <motion.h1
        variants={item}
        className="font-hero text-5xl sm:text-7xl leading-[1.15] text-ink max-w-3xl mb-6"
      >
        Cybersecurity student. I build things sometimes for{" "}
        <span className="font-mono text-lg sm:text-2xl align-middle text-rust bg-rust/10 px-2 py-0.5 rounded-md">
          security
        </span>
        , sometimes for my community, sometimes just be
        <span className="text-rust">CAUSE</span>.
      </motion.h1>

      <motion.p
        variants={item}
        className="font-hero italic text-2xl sm:text-3xl text-ink-soft max-w-2xl mb-2 leading-snug"
      >
        Do it for the cause. Do it for the ideas in your heart.
      </motion.p>

      <motion.p
        variants={item}
        className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink-soft/35 mb-10"
      >
        also building, quietly, for the community
      </motion.p>
    </motion.div>
  );
}
