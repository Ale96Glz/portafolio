import { stack } from "../../data/stack";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import Chip from "../ui/Chip";
import Plate from "../ui/Plate";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line/50">
      <Container className="py-12 sm:py-16">
        <SectionHeader
          index="03"
          title="Tecnologías"
          sub="desarrollo y calidad"
        />
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((group) => (
              <Plate key={group.label} className="p-4 sm:p-5">
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </Plate>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
