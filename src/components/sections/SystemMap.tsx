import { orbitBodies, repoBodies, type SystemBody } from "../../data/system";

function PlanetDisc({ body, selected }: { body: SystemBody; selected: boolean }) {
  const repo = body.kind === "repo";

  return (
    <span
      className={`relative block transition-transform duration-300 ${
        selected ? "scale-125" : "group-hover:scale-110 group-focus-visible:scale-110"
      }`}
      style={{ width: body.size, height: body.size }}
    >
      <span
        className="absolute -inset-2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${body.color}55 0%, transparent 70%)`,
          opacity: selected ? 0.9 : repo ? 0.28 : 0.45,
        }}
      />
      {body.ring && (
        <span
          className="absolute top-1/2 left-1/2 rounded-full border"
          style={{
            width: "230%",
            height: "42%",
            borderColor: `${body.color}cc`,
            boxShadow: `0 0 10px ${body.color}55`,
            transform: "translate(-50%, -50%) rotate(-22deg)",
          }}
        />
      )}
      <span
        className="relative block h-full w-full overflow-hidden rounded-full"
        style={{
          background: repo
            ? `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.4) 0%, transparent 34%), ${body.color}`
            : `
            radial-gradient(circle at 30% 26%, rgba(255,255,255,0.55) 0%, transparent 32%),
            radial-gradient(circle at 78% 78%, rgba(0,0,0,0.42) 0%, transparent 46%),
            linear-gradient(145deg, ${body.color} 0%, ${body.color} 42%, color-mix(in srgb, ${body.color} 55%, #000) 100%)
          `,
          boxShadow: selected
            ? `inset 0 0 0 1px ${body.color}, 0 0 0 2px var(--color-paper), 0 0 0 4px ${body.color}, 0 0 28px ${body.color}aa`
            : `inset 0 1px 1px rgba(255,255,255,0.25), 0 0 16px ${body.color}66`,
        }}
      />
    </span>
  );
}

function OrbitRing({
  body,
  active,
  dashed,
}: {
  body: SystemBody;
  active: boolean;
  dashed?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute top-1/2 left-1/2 rounded-full border ${
        dashed ? "border-dashed" : ""
      } ${active ? "orbit-active-ring" : dashed ? "border-signal/25" : "border-line/30"}`}
      style={{
        width: `${body.orbit * 2}%`,
        height: `${body.orbit * 2}%`,
        marginLeft: `${-body.orbit}%`,
        marginTop: `${-body.orbit}%`,
        borderColor: active ? `${body.color}99` : undefined,
        boxShadow: active ? `0 0 24px ${body.color}33` : undefined,
      }}
    />
  );
}

export default function SystemMap({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);
  const openRing = repoBodies[0];

  return (
    <div className="system-stage relative mx-auto aspect-square w-full max-w-136">
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_72px_rgba(8,9,12,0.72)]" />
      <div className="pointer-events-none absolute top-1/2 right-[5%] left-[5%] h-px bg-line/30" />
      <div className="pointer-events-none absolute top-[5%] bottom-[5%] left-1/2 w-px bg-line/30" />

      {ticks.map((deg) => (
        <div
          key={deg}
          className="pointer-events-none absolute inset-0"
          style={{ transform: `rotate(${deg}deg)` }}
        >
          <span className="absolute top-[4.5%] left-1/2 h-2 w-px -translate-x-1/2 bg-line/45" />
        </div>
      ))}

      {orbitBodies
        .filter((body) => body.kind === "system")
        .map((body) => (
          <OrbitRing key={`${body.id}-ring`} body={body} active={selectedId === body.id} />
        ))}

      {openRing && (
        <OrbitRing
          body={openRing}
          active={repoBodies.some((body) => body.id === selectedId)}
          dashed
        />
      )}

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-signal/20" />

      {orbitBodies.map((body) => (
        <div
          key={body.id}
          className="orbit-spin absolute top-1/2 left-1/2"
          data-kind={body.kind}
          data-active={selectedId === body.id}
          style={{
            width: `${body.orbit * 2}%`,
            height: `${body.orbit * 2}%`,
            marginLeft: `${-body.orbit}%`,
            marginTop: `${-body.orbit}%`,
            ["--period" as string]: `${body.period}s`,
            ["--delay" as string]: `${-(body.start / 360) * body.period}s`,
            ["--start" as string]: `${body.start}deg`,
          }}
        >
          <button
            type="button"
            aria-label={`${body.kind === "repo" ? "Repositorio" : "Sistema"} ${body.catalog}: ${body.title}`}
            aria-pressed={selectedId === body.id}
            onClick={() => onSelect(body.id)}
            className="planet-hit group absolute top-0 left-1/2 z-10 -mt-6 -ml-6 flex h-12 w-12 cursor-pointer items-center justify-center"
          >
            <span
              className="orbit-counter relative flex h-full w-full items-center justify-center"
              style={{
                ["--period" as string]: `${body.period}s`,
                ["--delay" as string]: `${-(body.start / 360) * body.period}s`,
                ["--start" as string]: `${body.start}deg`,
              }}
            >
              <PlanetDisc body={body} selected={selectedId === body.id} />
              <span
                className={`planet-label absolute top-[calc(100%+2px)] left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-mono text-[10px] tracking-[0.12em] uppercase transition-opacity ${
                  selectedId === body.id
                    ? "text-signal opacity-100"
                    : "text-ink-faint opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                }`}
              >
                {body.catalog}
                <span className="mt-0.5 block text-[8px] tracking-[0.16em] text-ink-faint">
                  {body.year}
                </span>
              </span>
            </span>
          </button>
        </div>
      ))}

      <div className="planet-core pointer-events-none absolute top-1/2 left-1/2 z-0 flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-signal/40 bg-paper-2">
        <span className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(196,180,154,0.35),transparent_62%)]" />
        <span className="relative font-display text-[15px] tracking-tight text-signal">AG</span>
        <span className="relative mt-0.5 font-mono text-[8px] tracking-[0.18em] text-ink-faint uppercase">
          2026
        </span>
      </div>

      <p className="pointer-events-none absolute top-3 left-3 font-mono text-[9px] tracking-[0.16em] text-ink-faint uppercase">
        Núcleo · sistemas
      </p>
      <p className="pointer-events-none absolute right-3 bottom-3 font-mono text-[9px] tracking-[0.16em] text-ink-faint uppercase">
        Anillo · laboratorio
      </p>
    </div>
  );
}
