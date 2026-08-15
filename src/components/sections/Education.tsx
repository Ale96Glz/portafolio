import { education } from "../../data/education";
import SectionHeader from "../layout/SectionHeader";
import StatusBadge from "../ui/StatusBadge";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";

export default function Education() {
  return (
    <section id="educacion" className="border-t border-line/50">
      <Container className="py-14 sm:py-16">
        <SectionHeader index="04" title="Formación académica" sub="2015 — 2026" />
        <Reveal>
          <div>
            {education.map((item) => (
              <article
                key={item.degree}
                className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-12"
              >
                <div>
                  <time className="text-[13px] text-ink-faint">{item.dateRange}</time>
                  <div className="mt-3">
                    <StatusBadge status={item.status} label={item.statusLabel} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-[24px] font-medium tracking-tight text-ink">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink-soft">{item.org}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
