import { useState } from "react";
import Button from "../ui/Button";
import Container from "./Container";
import { profile } from "../../data/profile";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#stack", label: "Tecnologías" },
  { href: "#educacion", label: "Formación" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line/60 bg-paper/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line font-display text-[13px] text-signal">
            AG
          </span>
          <span className="hidden font-display text-[17px] tracking-tight text-ink sm:block">
            Alejandro González
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13px] text-ink-soft transition-colors after:absolute after:right-0 after:bottom-[-3px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contacto">Contactar</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
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
        <div id="menu-movil" className="animate-fade-in border-t border-line bg-paper-2 md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {l.label}
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
