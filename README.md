# Alejandro González Osorio

Portafolio web. Desarrollo full-stack, verificación de calidad y seguridad en sistemas regulados.

Disponible en Ciudad de México y en remoto. Español e inglés.

[Correo](mailto:ale96glz@gmail.com) · [LinkedIn](https://www.linkedin.com/in/alejandro-gonz%C3%A1lez-osorio-635671199/) · [GitHub](https://github.com/Ale96Glz)

## Sobre el proyecto

Sitio de una página construido con React, TypeScript y Tailwind CSS. El contenido (perfil, proyectos, experiencia, formación y tecnologías) está separado de la interfaz, en `src/data/`.

Incluye:

- Presentación y resumen profesional
- Carrusel de proyectos destacados
- Línea de tiempo de experiencia
- Stack técnico
- Formación académica
- Contacto y descarga de CV

## Tecnologías

| Área        | Herramienta      |
| ----------- | ---------------- |
| UI          | React 19         |
| Lenguaje    | TypeScript       |
| Estilos     | Tailwind CSS 4   |
| Build       | Vite 8           |
| Lint        | Oxlint           |

## Requisitos

- Node.js 20 o superior
- npm

## Uso

```bash
npm install
npm run dev
```

| Comando           | Descripción                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Servidor local                 |
| `npm run build`   | Compilación de producción      |
| `npm run preview` | Vista previa del build         |
| `npm run lint`    | Análisis estático con Oxlint   |

## Estructura

```text
src/
  App.tsx                 Composición de la página
  main.tsx                Punto de entrada
  index.css               Tema y estilos globales
  components/
    layout/               Navegación, contenedor y pie
    ui/                   Botón, revelado al scroll, badges
    sections/             Hero, proyectos, experiencia, stack
    index.ts              Exportaciones públicas
  data/                   Contenido del portafolio
public/                   CV, favicon y archivos estáticos
```

Para actualizar textos, proyectos o el stack, edita los archivos en `src/data/`. No hace falta tocar las secciones.

## Despliegue en GitHub Pages

El sitio se publica con GitHub Actions (`.github/workflows/deploy.yml`). Vite usa el nombre del repositorio como `base`, así que las rutas del CV y los assets funcionan en un project site.

1. Crea un repositorio en GitHub e inicializa git en esta carpeta:

```bash
git init
git add .
git commit -m "Publicar portafolio"
git branch -M main
git remote add origin https://github.com/Ale96Glz/NOMBRE-DEL-REPO.git
git push -u origin main
```

2. Activa Pages **antes** de que el workflow pueda publicar. En el repositorio:

   **Settings → Pages → Build and deployment → Source: GitHub Actions**

   Si el job `deploy` falla con `404 / Failed to create deployment`, Pages aún no está habilitado. Actívalo y vuelve a lanzar el workflow en **Actions**.

3. El workflow corre en cada push a `main`. La URL queda:

`https://Ale96Glz.github.io/NOMBRE-DEL-REPO/`

Si el repositorio se llama `Ale96Glz.github.io`, el sitio se sirve en la raíz: `https://Ale96Glz.github.io/`.

## Licencia

El código del sitio puede usarse como referencia. El contenido profesional (textos, experiencia y CV) es de Alejandro González Osorio.
