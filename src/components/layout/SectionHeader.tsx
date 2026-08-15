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
    <div className="mb-8">
      <div className="flex flex-wrap items-baseline justify-between gap-6">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-[30px] leading-none tracking-tight text-signal sm:text-[38px]">
            {index}
          </span>
          <h2 className="font-display text-[30px] font-medium leading-none tracking-tight text-ink sm:text-[38px]">
            {title}
          </h2>
        </div>
        <p className="text-[14px] text-ink-faint">{sub}</p>
      </div>
      <div className="mt-4 h-px w-14 bg-signal/70" />
    </div>
  );
}
