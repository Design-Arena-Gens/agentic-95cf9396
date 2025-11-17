type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <header className="space-y-3">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.4em] text-accent/70">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-soft md:text-4xl">{title}</h2>
      {description && (
        <p className="text-soft/75 md:text-lg">{description}</p>
      )}
    </header>
  );
}
