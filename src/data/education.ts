import type { Status } from "./experience";

export interface EducationItem {
  degree: string;
  org: string;
  dateRange: string;
  status: Status;
  statusLabel: string;
}

export const education: EducationItem[] = [
  {
    degree: "Posgrado en Ciencias y Tecnologías de la Información",
    org: "Universidad Autónoma Metropolitana, Unidad Iztapalapa",
    dateRange: "nov 2024 – nov 2026",
    status: "pending",
    statusLabel: "En curso",
  },
  {
    degree: "Ingeniería en Ciencias Informáticas",
    org: "Universidad de las Ciencias Informáticas (UCI), La Habana, Cuba",
    dateRange: "2015 – 2020",
    status: "pass",
    statusLabel: "Completado",
  },
];
