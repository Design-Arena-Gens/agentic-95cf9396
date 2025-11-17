type Tip = {
  title: string;
  description: string;
};

type VsCodeTipsProps = {
  tips: Tip[];
};

export function VsCodeTips({ tips }: VsCodeTipsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {tips.map((tip) => (
        <div
          key={tip.title}
          className="rounded-2xl border border-accent/40 bg-accent/10 p-5 text-sm text-soft/80 shadow-md shadow-black/20"
        >
          <h4 className="text-base font-semibold text-soft">{tip.title}</h4>
          <p className="mt-2 leading-relaxed text-soft/70">
            {tip.description}
          </p>
        </div>
      ))}
    </div>
  );
}
