export default function SectionHeader({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mb-7 sm:mb-8">
      <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
        {index}
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-[28px] font-medium leading-none tracking-tight text-ink sm:text-[34px]">
          {title}
        </h2>
        <p className="font-mono text-[12px] tracking-[0.12em] text-ink-faint uppercase">
          {sub}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-px w-12 bg-signal/80" />
        <div className="h-px flex-1 bg-line/60" />
      </div>
    </div>
  );
}
