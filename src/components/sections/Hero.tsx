import { profile } from "../../data/profile";
import Button from "../ui/Button";
import Container from "../layout/Container";

export default function Hero() {
  const paragraphs = profile.role.split("\n\n");

  return (
    <header id="inicio">
      <Container className="py-12 sm:py-16">
        <div className="animate-fade-up flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-[15px] font-medium text-ink">{profile.name}</p>
          <p className="text-[13px] text-ink-faint">{profile.availability}</p>
        </div>

        <h1 className="animate-fade-up delay-1 mt-10 max-w-5xl font-display text-[36px] font-medium leading-[1.15] tracking-tight text-ink sm:text-[48px] lg:text-[54px]">
          {profile.headline}
        </h1>

        <div className="animate-fade-up delay-2 mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-justify text-[16px] leading-7 text-ink-soft"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="animate-fade-up delay-3 mt-8 text-[13px] leading-6 text-ink-faint">
          {profile.focus.join("  ·  ")}
        </p>

        <div className="animate-fade-up delay-4 mt-8 flex flex-wrap gap-3">
          <Button href="#contacto">Contactar</Button>
          <Button href={profile.cvUrl} variant="secondary">
            Descargar CV
          </Button>
        </div>

        <div className="animate-fade-up delay-5 mt-12 grid grid-cols-3 pt-2">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[32px] font-medium tracking-tight text-ink sm:text-[36px]">
                {s.num}
              </p>
              <p className="mt-1 text-[13px] text-ink-faint">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </header>
  );
}
