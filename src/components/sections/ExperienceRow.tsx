import type { ExperienceItem } from "../../data/experience";
import { bodyByTitle } from "../../data/system";
import { useCatalog } from "../ui/CatalogContext";

export default function ExperienceRow({
  item,
  first,
  last,
}: {
  item: ExperienceItem;
  first: boolean;
  last: boolean;
}) {
  const body = bodyByTitle(item.title);
  const color = body?.color ?? "#c4b49a";
  const { selectedId, select } = useCatalog();
  const active = body?.id === selectedId;

  const openSystem = () => {
    if (!body) return;
    select(body.id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("trabajo")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <article className="grid gap-2 py-4 sm:grid-cols-[168px_16px_1fr] sm:gap-x-6 sm:py-5">
      <time className="pt-0.5 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase sm:pt-1 sm:text-right">
        {item.dateRange}
      </time>

      <div className="relative hidden sm:block">
        <span
          className={`absolute left-1/2 w-px -translate-x-1/2 bg-line/70 ${
            first ? "top-3" : "top-0"
          } ${last ? "h-3" : "bottom-0"}`}
        />
        <span
          className="absolute top-1.5 left-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 ring-paper"
          style={{ backgroundColor: color }}
        />
      </div>

      <div>
        <button
          type="button"
          onClick={openSystem}
          className="group w-full cursor-pointer rounded-sm text-left"
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full sm:hidden"
              style={{ backgroundColor: color }}
            />
            <p className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
              {body?.catalog ?? item.sector}
            </p>
          </div>
          <h3
            className={`mt-2 font-display text-[22px] font-medium tracking-tight transition-colors ${
              active ? "text-signal" : "text-ink group-hover:text-signal"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-2 text-[14px] leading-6 text-ink-soft">
            {item.role} · {item.org}
          </p>
        </button>
      </div>
    </article>
  );
}
