import { useEffect, useRef, useState } from "react";
import { experience } from "../../data/experience";
import type { ExperienceItem } from "../../data/experience";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3.5 5.5 8 10 12.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setCount(3);
      else if (window.matchMedia("(min-width: 640px)").matches) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function CaseCard({
  item,
  index,
  selected,
  onSelect,
}: {
  item: ExperienceItem;
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article className="flex h-full">
      <button
        type="button"
        onClick={onSelect}
        className={`flex h-full w-full flex-col border p-6 text-left transition-all duration-300 motion-reduce:transition-colors sm:p-7 ${
          selected
            ? "border-signal bg-surface"
            : "border-line bg-surface hover:-translate-y-0.5 hover:border-ink-faint"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
            {item.sector}
          </span>
          <span className="font-mono text-[11px] text-ink-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-5 line-clamp-2 min-h-[2.6em] font-display text-[22px] font-medium leading-snug tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-2 min-h-[2.5em] text-[13px] leading-5 text-ink-faint">
          {item.role} · {item.org}
        </p>
        <p className="mt-5 line-clamp-4 min-h-[7em] flex-1 text-justify text-[15px] leading-7 text-ink-soft">
          {item.impact}
        </p>
        <div className="mt-6 flex min-h-14.5 flex-wrap content-start gap-2">
          {item.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="border border-line px-2 py-1 font-mono text-[11px] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </button>
    </article>
  );
}

export default function FeaturedWork() {
  const cases = experience;
  const scroller = useRef<HTMLDivElement>(null);
  const visibleCount = useVisibleCount();
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(0);
  const pageCount = Math.max(1, Math.ceil(cases.length / visibleCount));
  const active = cases[selected];

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const syncPage = () => {
      const next = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
      setPage(Math.min(pageCount - 1, Math.max(0, next)));
    };

    el.scrollTo({ left: 0 });
    setPage(0);
    el.addEventListener("scroll", syncPage, { passive: true });
    return () => el.removeEventListener("scroll", syncPage);
  }, [visibleCount, pageCount]);

  const goTo = (nextPage: number) => {
    const el = scroller.current;
    if (!el) return;
    const clamped = Math.min(pageCount - 1, Math.max(0, nextPage));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setPage(clamped);
  };

  return (
    <section id="trabajo" className="border-t border-line/50">
      <Container className="py-14 sm:py-16">
        <SectionHeader
          index="01"
          title="Proyectos destacados"
          sub="2018 — 2026"
        />
        <Reveal>
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-[13px] text-ink-faint">
                {String(page + 1).padStart(2, "0")}
                <span className="mx-2 text-line">—</span>
                {String(pageCount).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  aria-label="Proyectos anteriores"
                  disabled={page === 0}
                  onClick={() => goTo(page - 1)}
                  className="inline-flex items-center gap-2 text-[13px] text-ink transition-colors hover:text-signal disabled:cursor-not-allowed disabled:text-ink-faint"
                >
                  <ChevronLeft />
                  Anterior
                </button>
                <button
                  type="button"
                  aria-label="Proyectos siguientes"
                  disabled={page >= pageCount - 1}
                  onClick={() => goTo(page + 1)}
                  className="inline-flex items-center gap-2 text-[13px] text-ink transition-colors hover:text-signal disabled:cursor-not-allowed disabled:text-ink-faint"
                >
                  Siguiente
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div
              ref={scroller}
              className="flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
              aria-roledescription="carrusel"
              aria-label="Proyectos destacados"
            >
              {cases.map((item, i) => (
                <div
                  key={item.title}
                  className="flex w-full shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-2rem)/3)]"
                >
                  <CaseCard
                    item={item}
                    index={i}
                    selected={selected === i}
                    onSelect={() => setSelected(i)}
                  />
                </div>
              ))}
            </div>

            {active && (
              <div key={active.title} className="animate-fade-up mt-10">
                <p className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
                  Alcance del trabajo · {active.sector}
                </p>
                <h4 className="mt-3 font-display text-[26px] font-medium tracking-tight text-ink">
                  {active.title}
                </h4>
                <p className="mt-2 text-[14px] text-ink-faint">
                  {active.role} · {active.org} · {active.dateRange}
                </p>
                <ul className="mt-6 max-w-3xl space-y-3">
                  {active.bullets.map((b) => (
                    <li key={b} className="text-justify text-[16px] leading-7 text-ink-soft">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </Reveal>
      </Container>
    </section>
  );
}
