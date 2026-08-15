import { profile } from "../../data/profile";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Contact() {
  const { contact } = profile;

  const rows = [
    { label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Teléfono", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "WhatsApp", value: contact.phone, href: contact.whatsappUrl },
    { label: "Ubicación", value: contact.location },
    { label: "LinkedIn", value: contact.linkedinHandle, href: contact.linkedinUrl },
    { label: "GitHub", value: contact.github, href: contact.githubUrl },
  ];

  return (
    <section id="contacto" className="border-t border-line/50">
      <Container className="py-14 sm:py-16">
        <SectionHeader index="05" title="Contacto" sub="CDMX · Remoto" />
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-display text-[34px] font-medium leading-tight tracking-tight text-ink sm:text-[40px]">
                Disponible para nuevas oportunidades.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${contact.email}`}>Enviar correo</Button>
                <Button href={contact.whatsappUrl} variant="secondary" external>
                  WhatsApp
                </Button>
                <Button href={profile.cvUrl} variant="secondary">
                  Descargar CV
                </Button>
              </div>
            </div>

            <div>
              {rows.map((row) => {
                const inner = (
                  <div className="flex items-baseline justify-between gap-6 py-4">
                    <span className="text-[13px] text-ink-faint">{row.label}</span>
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
                  <div key={row.label}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
