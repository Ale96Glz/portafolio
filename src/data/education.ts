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
    degree: "Maestría en Ciencias y Tecnologías de la Información",
    org: "Universidad Autónoma Metropolitana, Unidad Iztapalapa",
    dateRange: "oct 2024 a presente",
    status: "pending",
    statusLabel: "En curso",
  },
  {
    degree: "Ingeniería en Ciencias Informáticas",
    org: "Universidad de las Ciencias Informáticas (UCI), La Habana, Cuba",
    dateRange: "2015 a 2020",
    status: "pass",
    statusLabel: "Completado",
  },
  {
    degree: "EF SET English Certificate 67/100 (C1 Proficient)",
    org: "EF SET",
    dateRange: "Certificación",
    status: "pass",
    statusLabel: "C1",
  },
];
