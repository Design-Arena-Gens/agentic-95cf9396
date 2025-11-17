"use client";
import { motion } from "framer-motion";
import { DayPlan } from "@/lib/roadmap";
import clsx from "clsx";

type DayCardProps = {
  plan: DayPlan;
};

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.4, ease: "easeOut" }
  })
};

export function DayCard({ plan }: DayCardProps) {
  return (
    <motion.article
      className="rounded-2xl border border-slate/40 bg-slate/40 p-6 shadow-xl shadow-black/30 backdrop-blur-lg transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl md:p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={plan.day}
    >
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
            Day {plan.day}
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-soft md:text-3xl">
            {plan.theme}
          </h3>
        </div>
        <span className="rounded-full border border-accent/40 px-4 py-1 text-sm text-accent">
          {plan.totalHours} hrs
        </span>
      </header>

      <p className="mt-4 text-soft/80">{plan.outcome}</p>

      <ul className="mt-6 space-y-4">
        {plan.focus.map((block) => (
          <li
            key={block.label}
            className={clsx(
              "rounded-xl border border-slate/40 bg-midnight/60 p-4 transition",
              "hover:border-accent/60 hover:bg-midnight/80"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-lg font-semibold text-soft">{block.label}</h4>
              <span className="text-sm text-accent/80">{block.duration}h</span>
            </div>
            <p className="mt-2 text-sm text-soft/75">{block.goal}</p>
            <p className="mt-2 text-sm text-soft/65">
              <span className="font-semibold text-soft">Activity:</span>{" "}
              {block.activity}
            </p>
            {block.resources.length > 0 && (
              <div className="mt-3">
                <p className="text-xs uppercase tracking-wide text-soft/50">
                  Focus Links
                </p>
                <ul className="mt-1 space-y-1 text-sm text-accent/80">
                  {block.resources.map((href) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {href}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <footer className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm text-soft/80">
        <p>
          <span className="font-semibold text-accent">Deliverable:</span>{" "}
          {plan.deliverable}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-accent">Reflection:</span>{" "}
          {plan.reflection}
        </p>
      </footer>
    </motion.article>
  );
}
