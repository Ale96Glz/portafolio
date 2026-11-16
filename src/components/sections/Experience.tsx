import { experience } from "../../data/experience";
import SectionHeader from "../layout/SectionHeader";
import ExperienceRow from "./ExperienceRow";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";

export default function Experience() {
  return (
    <section id="experiencia" className="border-t border-line/50">
      <Container className="py-12 sm:py-16">
        <SectionHeader
          index="02"
          title="Experiencia profesional"
          sub="índice de los sistemas"
        />
        <Reveal>
          <p className="mb-6 max-w-2xl text-[15px] leading-7 text-ink-soft">
            Ocho años de desarrollo full-stack en entornos regulados. Desde
            2025, pruebas automatizadas y auditoría de calidad. Un clic abre
            el planeta en el catálogo.
          </p>
          <div>
            {experience.map((item, index) => (
              <ExperienceRow
                key={item.title}
                item={item}
                first={index === 0}
                last={index === experience.length - 1}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
