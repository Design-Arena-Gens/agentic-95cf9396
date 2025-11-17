import { HoursSummary } from "@/components/hours-summary";
import { hoursSummary } from "@/lib/roadmap";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-midnight via-slate to-midnight p-8 shadow-2xl shadow-black/50 md:p-12">
      <div className="md:flex md:items-center md:justify-between md:gap-10">
        <div className="space-y-6 md:w-2/3">
          <p className="text-xs uppercase tracking-[0.4em] text-accent/70">
            10-Day Intensive
          </p>
          <h1 className="text-4xl font-semibold text-soft md:text-5xl">
            Master Playwright Python Automation for Word WebView2 Add-ins
          </h1>
          <p className="text-soft/80 md:text-lg">
            A laser-focused roadmap designed for ambitious beginners. Balance
            deep technical dives with hands-on practice so you can demo a working
            automation slice in just ten days.
          </p>
        </div>
        <div className="mt-6 flex justify-center md:mt-0 md:w-1/3">
          <div className="relative h-48 w-48">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
              alt="Automation workflow"
              fill
              className="rounded-3xl object-cover opacity-90 mix-blend-screen"
            />
            <div className="absolute inset-0 rounded-3xl border border-accent/40" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <HoursSummary {...hoursSummary} />
      </div>
    </section>
  );
}
