import type { Status } from "../../data/experience";

const styles: Record<Status, string> = {
  pass: "text-pass",
  pending: "text-pending",
};

export default function StatusBadge({
  status,
  label,
}: {
  status: Status;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[12px] ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full bg-current`} />
      {label}
    </span>
  );
}
