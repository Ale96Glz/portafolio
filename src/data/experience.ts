export type Status = "pass" | "pending";

export interface ExperienceItem {
  title: string;
  role: string;
  org: string;
  dateRange: string;
  status: Status;
  statusLabel: string;
  sector: string;
  impact: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Auditoría técnica — SIVEI",
    role: "Jefe de línea de verificación del procesamiento",
    org: "Universidad Autónoma Metropolitana",
    dateRange: "ene 2026 – may 2026",
    status: "pass",
    statusLabel: "Completado",
    sector: "Electoral",
    impact:
      "Lideré la verificación de un sistema de voto electrónico: calidad, integridad de APIs y rendimiento bajo carga.",
    bullets: [
      "Como jefe de línea de verificación del procesamiento, diseñé y ejecuté la estrategia de calidad y rendimiento del sistema de voto electrónico.",
      "Organicé la auditoría de endpoints con pruebas automatizadas, contrastando respuestas, integridad de datos y el comportamiento real contra la arquitectura documentada.",
      "Definí e hice correr escenarios de carga y estrés con Gatling para localizar cuellos de botella, medir tiempos de respuesta y evaluar la resiliencia del procesamiento.",
      "El trabajo cubrió Java, Spring Boot, Karate y Swagger: no solo encontrar fallos, sino dejar evidencia reproducible de que el flujo crítico se sostenía.",
    ],
    tags: ["Java", "Spring Boot", "Gatling", "Karate", "Swagger"],
  },
  {
    title: "SIVEI — voto electrónico por internet",
    role: "Miembro del equipo auditor",
    org: "Universidad Autónoma Metropolitana",
    dateRange: "ago 2025 – dic 2025",
    status: "pass",
    statusLabel: "Completado",
    sector: "Electoral",
    impact:
      "Armé la suite de pruebas de API que sostuvo la auditoría de un sistema electoral en producción.",
    bullets: [
      "Diseñé e implementé la suite de pruebas automatizadas de API con Karate, para que la auditoría del voto electrónico no dependiera de chequeos manuales.",
      "Revisé endpoints de forma sistemática y verifiqué que los datos devueltos coincidieran con las especificaciones publicadas en Swagger/OpenAPI.",
      "Versioné el trabajo en GitHub e integré Java y Python según el punto de la auditoría, para cubrir tanto contratos como lógica de verificación.",
      "El resultado fue una base de pruebas reutilizable que el equipo auditor pudo ejecutar de forma repetible sobre el sistema en revisión.",
    ],
    tags: ["Python", "Java", "Karate", "GitHub"],
  },
  {
    title: "Fiscalix — automatización de procesos",
    role: "Desarrollador full-stack y asesor de Seguridad Informática",
    org: "Fiscalía General de la República de Cuba",
    dateRange: "sept 2023 – oct 2024",
    status: "pass",
    statusLabel: "Completado",
    sector: "Justicia",
    impact:
      "Desarrollé la automatización de procesos de una fiscalía nacional y asesoré su seguridad informática.",
    bullets: [
      "Desarrollé el sistema de automatización de procesos de la Fiscalía General de la República de Cuba, cubriendo backend y frontend.",
      "Implementé flujos de trabajo que antes se resolvían a mano, con PHP, Symfony, AngularJS y PostgreSQL, y empaqueté el entorno con Docker.",
      "Además del desarrollo, fui asesor de Seguridad Informática y Tecnología: revisé riesgos, prácticas y decisiones técnicas del proyecto.",
      "El alcance no era solo entregar módulos, sino dejar un sistema usable y más seguro para una institución nacional.",
    ],
    tags: ["PHP", "Symfony", "AngularJS", "PostgreSQL", "Docker"],
  },
  {
    title: "SISEN — registro de pólizas",
    role: "Desarrollador full-stack",
    org: "Empresa de Seguros Nacionales",
    dateRange: "dic 2020 – ago 2023",
    status: "pass",
    statusLabel: "Completado",
    sector: "Seguros",
    impact:
      "Digitalicé la recepción de pólizas — un proceso manual — y reduje errores humanos en un equipo de 2 a 4 personas.",
    bullets: [
      "Trabajé como desarrollador full-stack en la automatización y el registro de pólizas de seguro, en un equipo de 2 a 4 personas.",
      "Implementé el módulo de recepción de nuevas pólizas: un trámite que antes era manual pasó a sistema, con menos espacio para error humano.",
      "Construí y mantuve funcionalidades sobre JavaScript, Spring Boot, PostgreSQL, jQuery e Hibernate, incluyendo corrección de bugs y mejoras continuas.",
      "Acompañé el producto durante casi tres años: no fue un entregable puntual, sino evolución y soporte de un sistema en uso.",
    ],
    tags: ["JavaScript", "Spring Boot", "PostgreSQL", "jQuery", "Hibernate"],
  },
  {
    title: "VUA y GINA — gestión aduanera",
    role: "Desarrollador backend",
    org: "Aduana General de la República de Cuba",
    dateRange: "mar 2018 – nov 2020",
    status: "pass",
    statusLabel: "Completado",
    sector: "Aduanas",
    impact:
      "Implementé el módulo de recepción de documentos para la entrada de mercancías al país.",
    bullets: [
      "Formé parte del backend del portal web y del sistema de gestión de la Aduana, en un equipo de 4 desarrolladores.",
      "Implementé el módulo de recepción de documentos para la entrada de mercancías al país, un punto de control con reglas de negocio estrictas.",
      "Desarrollé lógica de negocio, validaciones normativas, reportes y consultas sobre Oracle, con Symfony, Apache y extJS en el entorno de trabajo.",
      "El foco era que el trámite aduanero quedara registrado, validado y consultable, no solo que la pantalla funcionara.",
    ],
    tags: ["Symfony", "Apache", "Oracle", "extJS"],
  },
];
