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
    title: "Aseguramiento de calidad · SIVEI",
    role: "Jefe de equipo de aseguramiento de la calidad del software",
    org: "Universidad Autónoma Metropolitana",
    dateRange: "ene 2026 a may 2026",
    status: "pass",
    statusLabel: "Completado",
    sector: "Electoral",
    impact:
      "Diseñé y ejecuté la estrategia de calidad y rendimiento de un sistema de voto electrónico, con evidencia previa a la entrega.",
    bullets: [
      "Como jefe de línea de verificación, definí la estrategia integral de calidad y rendimiento del sistema.",
      "Audité endpoints con pruebas automatizadas: integridad de datos y cumplimiento de la arquitectura documentada.",
      "Diseñé y ejecuté carga y estrés con Gatling para medir respuesta y localizar cuellos de botella.",
      "Registré métricas y hallazgos técnicos para el control de calidad previo a la entrega final.",
    ],
    tags: ["Java", "Spring Boot", "Gatling", "Karate", "Swagger"],
  },
  {
    title: "Automatización de QA · SIVEI",
    role: "Ingeniero de automatización de aseguramiento de la calidad",
    org: "Universidad Autónoma Metropolitana",
    dateRange: "ago 2025 a dic 2025",
    status: "pass",
    statusLabel: "Completado",
    sector: "Electoral",
    impact:
      "Implementé la suite de pruebas de API que sostuvo la auditoría de un sistema electoral en producción.",
    bullets: [
      "Diseñé e implementé la suite de pruebas automatizadas de API con Karate.",
      "Revisé endpoints de forma sistemática y verifiqué que los datos coincidieran con Swagger/OpenAPI.",
      "El resultado fue una base de pruebas reutilizable, ejecutable de forma repetible sobre el sistema en revisión.",
    ],
    tags: ["Karate", "Swagger", "Java", "Python"],
  },
  {
    title: "Auditoría funcional y de frontend · SIVEI",
    role: "Auditor funcional y de frontend",
    org: "Universidad Autónoma Metropolitana",
    dateRange: "may 2025",
    status: "pass",
    statusLabel: "Completado",
    sector: "Electoral",
    impact:
      "Contrasté votaciones sintéticas y captura masiva en frontend contra resultados de interfaz en una jornada electoral simulada.",
    bullets: [
      "Generé votaciones sintéticas con Python, replicando variables y volumen de una jornada nacional, y organicé los conjuntos en Excel.",
      "Armé visualizaciones en Excel, además de las de Python, para contrastar datos ingresados contra lo desplegado en la interfaz.",
      "Hice captura manual masiva en frontend y detecté discrepancias de cálculo, ordenamiento y proyección de candidaturas ganadoras.",
    ],
    tags: ["Python", "Excel", "Pruebas de UI"],
  },
  {
    title: "Fiscalix · automatización de procesos",
    role: "Programador full-stack",
    org: "Universidad de las Ciencias Informáticas · CIGE",
    dateRange: "sept 2023 a oct 2024",
    status: "pass",
    statusLabel: "Completado",
    sector: "Justicia",
    impact:
      "Desarrollé componentes full-stack de Fiscalix, sistema a medida para la Fiscalía General de la República de Cuba.",
    bullets: [
      "Trabajé en el Centro CIGE (UCI) en una solución a medida para la gestión y optimización de procesos de la Fiscalía.",
      "El alcance cubrió análisis de requerimientos y desarrollo full-stack de componentes clave, con PHP, Symfony, AngularJS, PostgreSQL y Docker.",
      "La arquitectura debía ser robusta, segura y alineada a necesidades institucionales, no solo un conjunto de pantallas.",
    ],
    tags: ["PHP", "Symfony", "AngularJS", "PostgreSQL", "Docker"],
  },
  {
    title: "SISEN · registro de pólizas",
    role: "Programador full-stack",
    org: "Universidad de las Ciencias Informáticas · CIGE",
    dateRange: "dic 2020 a ago 2023",
    status: "pass",
    statusLabel: "Completado",
    sector: "Seguros",
    impact:
      "Desarrollé y mantuve SISEN: automatización y registro digital de pólizas para la Empresa de Seguros Nacionales.",
    bullets: [
      "En el Centro CIGE (UCI) asumí nuevas características y el mantenimiento continuo del sistema de pólizas.",
      "Implementé el módulo de recepción de nuevas pólizas: un trámite manual pasó a sistema, con menos espacio para error humano.",
      "El foco era arquitectura estable, disponibilidad y gestión digital de expedientes, en un equipo de 2 a 4 personas.",
    ],
    tags: ["JavaScript", "Spring Boot", "PostgreSQL", "jQuery", "Hibernate"],
  },
  {
    title: "VUA y GINA · gestión aduanera",
    role: "Programador full-stack",
    org: "Universidad de las Ciencias Informáticas · CEIGE",
    dateRange: "mar 2018 a nov 2020",
    status: "pass",
    statusLabel: "Completado",
    sector: "Aduanas",
    impact:
      "Desarrollé full-stack el portal institucional y el sistema interno de gestión de la Aduana General de la República de Cuba.",
    bullets: [
      "En el Centro CEIGE (UCI) participé en la transformación digital de la Aduana: portal web y sistema de gestión interno.",
      "Implementé el módulo de recepción de documentos para la entrada de mercancías, con reglas de negocio estrictas.",
      "El trabajo cubrió automatización de procesos críticos e integración entre servicios de cara al público y de control gubernamental, sobre Symfony, Apache, Oracle y extJS.",
    ],
    tags: ["Symfony", "Apache", "Oracle", "extJS"],
  },
];
