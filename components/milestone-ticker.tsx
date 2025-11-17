"use client";
import { motion } from "framer-motion";

type MilestoneTickerProps = {
  milestones: { title: string; detail: string }[];
};

export function MilestoneTicker({ milestones }: MilestoneTickerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate/40 bg-midnight/60 py-4">
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-midnight via-midnight/80 to-transparent" />
      <motion.div
        className="flex gap-6 whitespace-nowrap text-sm text-soft/80"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...milestones, ...milestones].map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-5 py-2"
          >
            <span className="text-accent">{item.title}</span>
            <span className="text-soft/70">{item.detail}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
