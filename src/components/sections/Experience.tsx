import { experience } from "../../data/experience";
import SectionHeader from "../layout/SectionHeader";
import ExperienceRow from "./ExperienceRow";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";

export default function Experience() {
  return (
    <section id="experiencia" className="border-t border-line/50">
      <Container className="py-14 sm:py-16">
        <SectionHeader
          index="02"
          title="Experiencia profesional"
          sub="2018 — 2026"
        />
        <Reveal>
          <div>
            {experience.map((item) => (
              <ExperienceRow key={item.title} item={item} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
