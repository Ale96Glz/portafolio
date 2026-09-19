import type { ReactNode } from "react";

export default function Plate({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-line/70 bg-surface/40 ${className}`}>
      {children}
    </div>
  );
}
