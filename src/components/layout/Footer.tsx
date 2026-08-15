import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-line/50">
      <Container className="flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink-faint">
          © {new Date().getFullYear()} Alejandro González Osorio
        </p>
        <p className="text-[13px] text-ink-faint">Ciudad de México</p>
      </Container>
    </footer>
  );
}
