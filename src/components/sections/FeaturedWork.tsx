import { experience } from "../../data/experience";
import { bodyById, repoBodies, systemBodies } from "../../data/system";
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import SystemMap from "./SystemMap";
import Chip from "../ui/Chip";
import Plate from "../ui/Plate";
import Button from "../ui/Button";
import { useCatalog } from "../ui/CatalogContext";

function CatalogChip({
  id,
  catalog,
  color,
  dashed,
}: {
  id: string;
  catalog: string;
  color: string;
  dashed?: boolean;
}) {
  const { selectedId, select } = useCatalog();
  const active = selectedId === id;

  return (
    <button
      type="button"
      onClick={() => select(id)}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors ${
        dashed ? "border-dashed" : ""
      } ${
        active
          ? "border-signal/60 bg-signal-dim text-signal"
          : "border-line text-ink-faint hover:border-ink-faint hover:text-ink"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {catalog}
    </button>
  );
}

function SystemCard({ bodyId }: { bodyId: string }) {
  const body = bodyById(bodyId);
  const active = experience.find((item) => item.title === body?.title);
  if (!body || !active) return null;

  return (
    <Plate className="animate-fade-up p-5 sm:p-7 lg:sticky lg:top-24">
      <p className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
        Sistema · {active.sector} · {body.catalog}
      </p>
      <h3 className="mt-3 font-display text-[26px] font-medium tracking-tight text-ink sm:text-[30px]">
        {active.title}
      </h3>
      <p className="mt-2 text-[14px] text-ink-faint">
        {active.role} · {active.org} · {active.dateRange}
      </p>
      <p className="mt-5 text-justify text-[15px] leading-7 text-ink-soft">
        {active.impact}
      </p>
      <ul className="mt-6 space-y-3">
        {active.bullets.map((bullet) => (
          <li
            key={bullet}
            className="border-l border-line pl-4 text-justify text-[15px] leading-7 text-ink-soft sm:text-[16px]"
          >
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {active.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </Plate>
  );
}

function RepoCard({ bodyId }: { bodyId: string }) {
  const body = bodyById(bodyId);
  if (!body?.url) return null;

  return (
    <Plate className="animate-fade-up p-5 sm:p-7 lg:sticky lg:top-24">
      <p className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
        {body.id === "sdet" || body.id === "rgen"
          ? "SDET · GitHub"
          : "Laboratorio · GitHub"}{" "}
        · {body.catalog}
      </p>
      <h3 className="mt-3 font-display text-[26px] font-medium tracking-tight text-ink sm:text-[30px]">
        {body.title}
      </h3>
      <p className="mt-5 text-[15px] leading-7 text-ink-soft">{body.blurb}</p>
      {body.tags && (
        <div className="mt-6 flex flex-wrap gap-2">
          {body.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      )}
      <div className="mt-8">
        <Button href={body.url} external>
          Ver repositorio
        </Button>
      </div>
    </Plate>
  );
}

export default function FeaturedWork() {
  const { selectedId, select } = useCatalog();
  const selected = bodyById(selectedId);

  return (
    <section id="trabajo" className="border-t border-line/50">
      <Container className="py-12 sm:py-16">
        <SectionHeader
          index="01"
          title="Proyectos destacados"
          sub="sistemas y laboratorio"
        />
        <Reveal>
          <div>
            <p className="max-w-2xl text-[15px] leading-7 text-ink-soft">
              Los planetas son sistemas entregados. El anillo es trabajo
              abierto: ecommerce, su suite de pruebas, un generador REST
              Assured, un consultorio y evaluación de sesgo.
            </p>

            <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
              <Plate className="p-3 sm:p-5">
                <SystemMap selectedId={selectedId} onSelect={select} />
                <div className="relative z-20 mt-4 space-y-3">
                  <div>
                    <p className="mb-2 text-center font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
                      Sistemas
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {systemBodies.map((body) => (
                        <CatalogChip
                          key={body.id}
                          id={body.id}
                          catalog={body.catalog}
                          color={body.color}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-center font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
                      Laboratorio
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {repoBodies.map((body) => (
                        <CatalogChip
                          key={body.id}
                          id={body.id}
                          catalog={body.catalog}
                          color={body.color}
                          dashed
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Plate>

              {selected?.kind === "repo" ? (
                <RepoCard key={selected.id} bodyId={selected.id} />
              ) : (
                <SystemCard key={selectedId} bodyId={selectedId} />
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
