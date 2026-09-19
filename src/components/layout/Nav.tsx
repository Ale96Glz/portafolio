import { useState } from "react";
import Button from "../ui/Button";
import Container from "./Container";
import { profile } from "../../data/profile";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#stack", label: "Tecnologías" },
  { href: "#educacion", label: "Formación" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line/50 bg-paper/70 backdrop-blur-xl">
      <Container className="flex h-17 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute -inset-1 rounded-full border border-signal/25" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper/90 font-display text-[13px] text-signal">
              AG
            </span>
          </span>
          <span className="hidden font-display text-[17px] tracking-tight text-ink sm:block">
            Alejandro González
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase transition-colors after:absolute after:right-0 after:bottom-[-5px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contacto">Contactar</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span className="flex w-4 flex-col gap-1">
            <span
              className={`h-px w-full bg-ink transition-transform ${open ? "translate-y-[2.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-ink transition-transform ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div id="menu-movil" className="animate-fade-in border-t border-line bg-paper-2 lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[12px] tracking-[0.14em] text-ink-soft uppercase"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={profile.cvUrl} variant="secondary" onClick={() => setOpen(false)}>
              Descargar CV
            </Button>
            <Button href="#contacto" onClick={() => setOpen(false)}>
              Contactar
            </Button>
          </Container>
        </div>
      )}
    </nav>
  );
}
