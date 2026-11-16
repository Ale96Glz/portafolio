export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Lenguajes",
    items: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "Scala"],
  },
  {
    label: "Frameworks y librerías",
    items: ["React", "Angular", "Tailwind CSS", "Spring Boot", "NestJS", "Django", "Symfony", "AngularJS", "jQuery", "extJS", "Hibernate", "Prisma"],
  },
  {
    label: "Pruebas y automatización",
    items: ["Karate", "REST Assured", "Gatling", "JUnit 5", "Allure", "Hamcrest", "Swagger/OpenAPI", "Postman", "Pruebas de contrato", "Pruebas de carga", "Pruebas de UI"],
  },
  {
    label: "Bases de datos",
    items: ["PostgreSQL", "Oracle"],
  },
  {
    label: "Herramientas",
    items: ["Git", "Gitflow", "GitLab", "GitHub", "Maven", "Docker", "Kubernetes", "Apache", "Kafka", "Redis"],
  },
  {
    label: "Metodologías",
    items: ["Scrum", "Kanban", "DevSecOps", "Pirámide de pruebas", "Shift-left", "Arquitectura hexagonal", "DDD", "Code Review", "CI/CD"],
  },
];
