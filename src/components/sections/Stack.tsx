import { stack } from "../../data/stack";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line/50">
      <Container className="py-14 sm:py-16">
        <SectionHeader
          index="03"
          title="Tecnologías"
          sub="lenguajes, frameworks y herramientas"
        />
        <Reveal>
          <div>
            {stack.map((group) => (
              <div
                key={group.label}
                className="grid gap-3 py-3 first:pt-0 last:pb-0 sm:grid-cols-[220px_1fr] sm:items-baseline"
              >
                <h3 className="text-[13px] font-medium text-ink-faint">
                  {group.label}
                </h3>
                <p className="text-[16px] leading-8 text-ink">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      {item}
                      {i < group.items.length - 1 && (
                        <span className="text-ink-faint">  ·  </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
