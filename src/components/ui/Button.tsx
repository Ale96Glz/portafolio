import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-ink text-paper hover:bg-signal hover:text-paper",
  secondary:
    "border border-line bg-transparent text-ink hover:border-signal/50 hover:text-signal",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 hover:-translate-y-px motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
