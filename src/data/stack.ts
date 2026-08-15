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
    items: ["React", "Angular", "Tailwind CSS", "Spring Boot", "Django", "Symfony", "AngularJS", "jQuery", "extJS", "Hibernate"],
  },
  {
    label: "Testing y automatización",
    items: ["Karate", "Gatling", "Swagger/OpenAPI", "Postman"],
  },
  {
    label: "Bases de datos",
    items: ["PostgreSQL", "Oracle"],
  },
  {
    label: "Herramientas",
    items: ["Git", "Gitflow", "GitLab", "GitHub", "Maven", "Docker", "Apache"],
  },
  {
    label: "Metodologías",
    items: ["Scrum", "Kanban", "DevSecOps", "Code Review", "CI/CD"],
  },
];
