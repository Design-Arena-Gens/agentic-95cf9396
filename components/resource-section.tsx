type ResourceCategory = {
  category: string;
  items: {
    name: string;
    link: string;
    note: string;
  }[];
};

type ResourceSectionProps = {
  resources: ResourceCategory[];
};

export function ResourceSection({ resources }: ResourceSectionProps) {
  return (
    <section className="space-y-6">
      {resources.map((group) => (
        <div
          key={group.category}
          className="rounded-2xl border border-slate/40 bg-slate/30 p-6 shadow-md shadow-black/20 backdrop-blur"
        >
          <h3 className="text-lg font-semibold text-soft">{group.category}</h3>
          <ul className="mt-4 space-y-3 text-sm text-soft/80">
            {group.items.map((item) => (
              <li key={item.link} className="space-y-1">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  {item.name}
                </a>
                <p className="text-xs text-soft/60">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
