import {
  Contact,
  Education,
  Experience,
  FeaturedWork,
  Footer,
  Hero,
  Nav,
  Stack,
} from "./components";
import Starfield from "./components/ui/Starfield";
import { CatalogProvider } from "./components/ui/CatalogContext";

function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink antialiased">
      <Starfield />
      <div className="relative z-10">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Saltar al contenido
        </a>
        <CatalogProvider>
          <Nav />
          <main>
            <Hero />
            <FeaturedWork />
            <Experience />
            <Stack />
            <Education />
            <Contact />
          </main>
          <Footer />
        </CatalogProvider>
      </div>
    </div>
  );
}

export default App;
