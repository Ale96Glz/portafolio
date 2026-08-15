import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function pagesBase() {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (repo && !repo.endsWith(".github.io")) {
    return `/${repo}/`;
  }
  return "/";
}

export default defineConfig({
  base: pagesBase(),
  plugins: [react(), tailwindcss()],
});
