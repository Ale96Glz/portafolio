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
    title: "Aseguramiento de calidad · SIVEI",
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
    title: "Automatización de QA · SIVEI",
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
    title: "Fiscalix · automatización de procesos",
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
    title: "SISEN · registro de pólizas",
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
    title: "VUA y GINA · gestión aduanera",
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
    size: 12,
    orbit: 48,
    period: 70,
    color: "#e0d3b8",
    start: 12,
    url: "https://github.com/Ale96Glz/microservices-ecommerce",
    blurb:
      "Monorepo Maven (Java 21 / Spring Boot) con gateway, auth JWT, catálogo, pedidos, pagos y notificaciones. Kafka, Redis, PostgreSQL, Kubernetes y smoke E2E.",
    tags: ["Java 21", "Spring Boot", "Kafka", "Kubernetes"],
  },
  {
    id: "sdet",
    kind: "repo",
    title: "ecommerce-tests",
    catalog: "SDET",
    year: "GitHub",
    size: 11,
    orbit: 48,
    period: 76,
    color: "#9dc4b8",
    start: 84,
    url: "https://github.com/Ale96Glz/ecommerce-tests",
    blurb:
      "Suite de pruebas del ecommerce: contratos de API con REST Assured y JUnit 5, carga y estrés con Gatling, reportes Allure. Documenta casos, hallazgos y simulaciones.",
    tags: ["REST Assured", "Gatling", "JUnit 5", "Allure"],
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
    start: 156,
    url: "https://github.com/Ale96Glz/bias_eval",
    blurb:
      "Librería para medir sesgo en modelos de lenguaje (GPT-2, LLaMA y otros) con CrowS-Pairs y StereoSet.",
    tags: ["Python", "Hugging Face", "NLP"],
  },
  {
    id: "rgen",
    kind: "repo",
    title: "rest-assured-generator",
    catalog: "RGEN",
    year: "GitHub",
    size: 11,
    orbit: 48,
    period: 88,
    color: "#c9b89a",
    start: 228,
    url: "https://github.com/Ale96Glz/rest-assured-generator",
    blurb:
      "Generador Maven de suites HTTP: REST Assured, Hamcrest, JUnit 5 y Allure. Scripts para Windows y Unix que dejan un proyecto listo para mvn test.",
    tags: ["REST Assured", "JUnit 5", "Allure", "Maven"],
  },
  {
    id: "clin",
    kind: "repo",
    title: "consultorio",
    catalog: "CLIN",
    year: "GitHub",
    size: 11,
    orbit: 48,
    period: 94,
    color: "#a8b8c9",
    start: 300,
    url: "https://github.com/Ale96Glz/consultorio",
    blurb:
      "Gestión clínica: pacientes, agenda y expedientes. API NestJS con DDD, Prisma y Postgres; sesión con Better Auth; frontend en Angular.",
    tags: ["NestJS", "Angular", "Prisma", "DDD"],
  },
];

export const orbitBodies = [...systemBodies, ...repoBodies];

export function bodyByTitle(title: string) {
  return systemBodies.find((body) => body.title === title);
}

export function bodyById(id: string) {
  return orbitBodies.find((body) => body.id === id);
}
