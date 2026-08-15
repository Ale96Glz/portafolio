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

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Saltar al contenido
      </a>
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
    </div>
  );
}

export default App;
