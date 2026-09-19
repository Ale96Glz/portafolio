import { profile } from "../../data/profile";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Plate from "../ui/Plate";

export default function Contact() {
  const { contact } = profile;

  const rows = [
    { label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Teléfono", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "Ubicación", value: contact.location },
    { label: "LinkedIn", value: contact.linkedinHandle, href: contact.linkedinUrl },
    { label: "GitHub", value: contact.github, href: contact.githubUrl },
  ];

  return (
    <section id="contacto" className="border-t border-line/50">
      <Container className="py-12 sm:py-16">
        <SectionHeader index="05" title="Contacto" sub="CDMX · Remoto" />
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-pass" />
                <p className="font-mono text-[11px] tracking-[0.16em] text-pass uppercase">
                  Canal abierto
                </p>
              </div>
              <p className="mt-4 font-display text-[30px] font-medium leading-tight tracking-tight text-ink sm:text-[38px]">
                Disponible para nuevas oportunidades.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-ink-soft">
                Si hay un sistema crítico que construir, verificar o llevar a
                producción, escríbeme.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`mailto:${contact.email}`}>Enviar correo</Button>
                <Button href={contact.whatsappUrl} variant="secondary" external>
                  WhatsApp
                </Button>
                <Button href={profile.cvUrl} variant="secondary">
                  Descargar CV
                </Button>
              </div>
            </div>

            <Plate className="divide-y divide-line/70 px-5 sm:px-6">
              {rows.map((row) => {
                const inner = (
                  <div className="flex items-baseline justify-between gap-6 py-4">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
                      {row.label}
                    </span>
                    <span className="text-right text-[14px] text-ink transition-colors group-hover:text-signal">
                      {row.value}
                    </span>
                  </div>
                );

                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={row.label}>{inner}</div>
                );
              })}
            </Plate>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
