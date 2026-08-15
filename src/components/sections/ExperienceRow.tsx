import type { ExperienceItem } from "../../data/experience";

export default function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <article className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-10">
      <time className="text-[13px] text-ink-faint">{item.dateRange}</time>
      <div>
        <h3 className="font-display text-[20px] font-medium tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-1 text-[14px] text-ink-soft">
          {item.role} · {item.org}
        </p>
      </div>
    </article>
  );
}
