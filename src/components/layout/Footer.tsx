import Container from "./Container";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line/50">
      <Container className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
            Catálogo AG-26
          </p>
          <p className="mt-2 text-[13px] text-ink-soft">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">
            19.43° N · 99.13° W
          </p>
          <p className="mt-2 text-[13px] text-ink-soft">Ciudad de México</p>
        </div>
      </Container>
    </footer>
  );
}
