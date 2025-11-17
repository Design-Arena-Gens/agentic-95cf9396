import { Hero } from "@/components/hero";
import { PillarCard } from "@/components/pillar-card";
import { DayCard } from "@/components/day-card";
import { MilestoneTicker } from "@/components/milestone-ticker";
import { ResourceSection } from "@/components/resource-section";
import { VsCodeTips } from "@/components/vscode-tips";
import { SectionHeader } from "@/components/section-header";
import {
  dailyPlan,
  milestoneMoments,
  pillars,
  resourceLibrary,
  vscodeTips
} from "@/lib/roadmap";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:px-6 md:py-16">
      <Hero />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Strategic Foundations"
          title="Four Pillars to Anchor Your Progress"
          description="Balance fundamentals, Playwright mastery, Word add-in fluency, and delivery skills. Each pillar has curated hours to keep you on track."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Progress Checkpoints"
          title="Celebrate Milestones Along the Way"
          description="Use these waypoints to validate learning, secure stakeholder confidence, and keep motivation high."
        />
        <MilestoneTicker milestones={milestoneMoments} />
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Daily Plan"
          title="10-Day Roadmap with Time-Boxed Focus"
          description="Each day mixes guided study, implementation, and reflection. Stick to the suggested hours to maintain sustainable momentum."
        />
        <div className="grid gap-8">
          {dailyPlan.map((plan) => (
            <DayCard key={plan.day} plan={plan} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Resources"
          title="Curated Library"
          description="Bookmark these references so you have authoritative answers at your fingertips."
        />
        <ResourceSection resources={resourceLibrary} />
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="VS Code Workflow"
          title="Optimize Your IDE for Automation"
          description="Lean on VS Code profiles, tasks, and containers to keep your focus on shipping the automation slice."
        />
        <VsCodeTips tips={vscodeTips} />
      </section>

      <footer className="space-y-4 rounded-3xl border border-accent/30 bg-accent/10 p-8 text-soft/80 shadow-lg shadow-black/30">
        <h2 className="text-2xl font-semibold text-soft">
          Daily Ritual Checklist
        </h2>
        <ul className="grid gap-2 text-sm md:grid-cols-2">
          <li>✅ Start with a 5-minute review of yesterday&apos;s notes.</li>
          <li>✅ Time-box deep work into 60-90 minute focus blocks.</li>
          <li>✅ End each block by updating your learning vault.</li>
          <li>✅ Capture blockers immediately and plan a fix.</li>
          <li>✅ Demo something—even tiny—at the end of every day.</li>
          <li>✅ Protect sleep; process consolidation accelerates learning.</li>
        </ul>
        <p className="text-xs text-soft/60">
          Stay curious, iterate fast, and treat reflection as non-negotiable.
          By Day 10 you&apos;ll have both the skills and a portfolio artifact to
          showcase.
        </p>
      </footer>
    </main>
  );
}
