type HoursSummaryProps = {
  total: number;
  dailyAverage: number;
  weekendBuffer: number;
};

export function HoursSummary({
  total,
  dailyAverage,
  weekendBuffer
}: HoursSummaryProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate/40 bg-slate/30 p-6 shadow-inner shadow-black/30">
      <SummaryBadge label="Total Focus" value={`${total} hrs`} />
      <SummaryBadge
        label="Avg / Day"
        value={`${dailyAverage.toFixed(1)} hrs`}
      />
      <SummaryBadge
        label="Buffer"
        value={`${weekendBuffer} hrs`}
        description="Catch-up or reflection"
      />
    </div>
  );
}

function SummaryBadge({
  label,
  value,
  description
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="rounded-xl border border-accent/40 bg-midnight/70 px-5 py-3 text-soft">
      <p className="text-xs uppercase tracking-wide text-accent/70">{label}</p>
      <p className="mt-1 text-xl font-semibold text-soft">{value}</p>
      {description && (
        <p className="text-xs text-soft/60">{description}</p>
      )}
    </div>
  );
}
