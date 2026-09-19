import { profile } from "../../data/profile";
import Button from "../ui/Button";
import Chip from "../ui/Chip";
import Container from "../layout/Container";

export default function Hero() {
  const paragraphs = profile.role.split("\n\n");

  return (
    <header id="inicio" className="relative">
      <Container className="py-10 sm:py-14">
        <div className="animate-fade-up flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-pass" />
            <p className="font-mono text-[11px] tracking-[0.16em] text-pass uppercase">
              Disponible
            </p>
            <span className="text-line">/</span>
            <p className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">
              CDMX · Remoto · ES / EN
            </p>
          </div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
            Catálogo AG-26
          </p>
        </div>

        <p className="animate-fade-up delay-1 mt-8 font-display text-[18px] tracking-tight text-signal sm:text-[20px]">
          {profile.name}
        </p>

        <h1 className="animate-fade-up delay-1 mt-3 max-w-5xl font-display text-[34px] font-medium leading-[1.12] tracking-tight text-ink sm:text-[48px] lg:text-[54px]">
          {profile.headline}
        </h1>

        <div className="animate-fade-up delay-2 mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,0.7fr)] lg:items-stretch lg:gap-10">
          <div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-justify text-[16px] leading-7 text-ink-soft"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#contacto">Contactar</Button>
              <Button href={profile.contact.whatsappUrl} variant="secondary" external>
                WhatsApp
              </Button>
              <Button href={profile.cvUrl} variant="secondary">
                Descargar CV
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 overflow-hidden border border-line/70 lg:grid-cols-1">
            {profile.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-surface/30 px-4 py-4 sm:px-5 sm:py-5 ${
                  index > 0
                    ? "border-l border-line/70 lg:border-t lg:border-l-0"
                    : ""
                }`}
              >
                <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-[32px] font-medium tracking-tight text-ink sm:text-[36px]">
                  {stat.num}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
