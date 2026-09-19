import type { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line/80 bg-paper/40 px-2.5 py-1 font-mono text-[11px] leading-none text-ink-soft">
      {children}
    </span>
  );
}
