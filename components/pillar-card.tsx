"use client";
import { motion } from "framer-motion";
import type { Pillar } from "@/lib/roadmap";

type PillarCardProps = {
  pillar: Pillar;
  index: number;
};

export function PillarCard({ pillar, index }: PillarCardProps) {
  return (
    <motion.div
      className="rounded-2xl border border-slate/40 bg-slate/30 p-6 shadow-lg shadow-black/20 backdrop-blur md:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.35 }}
      viewport={{ once: true }}
    >
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
          Pillar {index + 1}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-soft md:text-2xl">
          {pillar.title}
        </h3>
      </header>
      <p className="mt-3 text-sm text-soft/80">{pillar.description}</p>
      <p className="mt-4 text-sm text-soft/70">
        <span className="font-semibold text-accent">Why:</span>{" "}
        {pillar.whyItMatters}
      </p>
      <p className="mt-4 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs uppercase tracking-wide text-accent">
        {pillar.hours} hrs focus
      </p>
    </motion.div>
  );
}
