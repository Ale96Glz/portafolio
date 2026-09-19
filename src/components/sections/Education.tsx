import { education } from "../../data/education";
import SectionHeader from "../layout/SectionHeader";
import StatusBadge from "../ui/StatusBadge";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import Plate from "../ui/Plate";

export default function Education() {
  return (
    <section id="educacion" className="border-t border-line/50">
      <Container className="py-12 sm:py-16">
        <SectionHeader index="04" title="Formación académica" sub="2015 — 2026" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {education.map((item) => (
              <Plate key={item.degree} className="flex flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <time className="font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
                    {item.dateRange}
                  </time>
                  <StatusBadge status={item.status} label={item.statusLabel} />
                </div>
                <h3 className="mt-4 font-display text-[22px] font-medium tracking-tight text-ink sm:text-[24px]">
                  {item.degree}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-soft">{item.org}</p>
              </Plate>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
