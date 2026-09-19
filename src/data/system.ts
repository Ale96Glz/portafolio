export type BodyKind = "system" | "repo";

export interface SystemBody {
  id: string;
  kind: BodyKind;
  title: string;
  catalog: string;
  year: string;
  size: number;
  orbit: number;
  period: number;
  color: string;
  start: number;
  ring?: boolean;
  url?: string;
  blurb?: string;
  tags?: string[];
}

export const systemBodies: SystemBody[] = [
  {
    id: "sivei-ii",
    kind: "system",
    title: "Auditoría técnica — SIVEI",
    catalog: "SIVEI II",
    year: "2026",
    size: 15,
    orbit: 16,
    period: 24,
    color: "#c4b49a",
    start: 28,
  },
  {
    id: "sivei-i",
    kind: "system",
    title: "SIVEI — voto electrónico por internet",
    catalog: "SIVEI I",
    year: "2025",
    size: 17,
    orbit: 24,
    period: 32,
    color: "#7dba9a",
    start: 198,
  },
  {
    id: "fiscalix",
    kind: "system",
    title: "Fiscalix — automatización de procesos",
    catalog: "Fiscalix",
    year: "2024",
    size: 21,
    orbit: 31,
    period: 40,
    color: "#8fa3c7",
    start: 112,
  },
  {
    id: "sisen",
    kind: "system",
    title: "SISEN — registro de pólizas",
    catalog: "SISEN",
    year: "2023",
    size: 24,
    orbit: 38,
    period: 52,
    color: "#c9a36a",
    start: 300,
    ring: true,
  },
  {
    id: "vua-gina",
    kind: "system",
    title: "VUA y GINA — gestión aduanera",
    catalog: "VUA / GINA",
    year: "2018",
    size: 18,
    orbit: 44,
    period: 64,
    color: "#9aa8b8",
    start: 232,
  },
];

export const repoBodies: SystemBody[] = [
  {
    id: "ecom",
    kind: "repo",
    title: "microservices-ecommerce",
    catalog: "ECOM",
    year: "GitHub",
    size: 11,
    orbit: 48,
    period: 70,
    color: "#e0d3b8",
    start: 22,
    url: "https://github.com/Ale96Glz/microservices-ecommerce",
    blurb:
      "Ecommerce en monorepo Maven: gateway, auth JWT, catálogo, pedidos, pagos y notificaciones. Eventos con Kafka, PostgreSQL y Docker Compose.",
    tags: ["Java 21", "Spring Boot", "Kafka"],
  },
  {
    id: "bias",
    kind: "repo",
    title: "bias_eval",
    catalog: "BIAS",
    year: "GitHub",
    size: 11,
    orbit: 48,
    period: 82,
    color: "#b7c4b0",
    start: 142,
    url: "https://github.com/Ale96Glz/bias_eval",
    blurb:
      "Librería para medir sesgo en modelos de lenguaje (GPT-2, LLaMA y otros) con CrowS-Pairs y StereoSet.",
    tags: ["Python", "Hugging Face", "NLP"],
  },
  {
    id: "paw",
    kind: "repo",
    title: "PawMarket",
    catalog: "PAW",
    year: "GitHub",
    size: 11,
    orbit: 48,
    period: 88,
    color: "#d4b8a8",
    start: 262,
    url: "https://github.com/Ale96Glz/PawMarket",
    blurb:
      "Backend de marketplace de mascotas. Monolito modular con OpenAPI, listo para evolucionar a microservicios.",
    tags: ["Java", "Spring Boot", "OpenAPI"],
  },
];

export const orbitBodies = [...systemBodies, ...repoBodies];

export function bodyByTitle(title: string) {
  return systemBodies.find((body) => body.title === title);
}

export function bodyById(id: string) {
  return orbitBodies.find((body) => body.id === id);
}
