import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Grimaldo Sánchez — Frontend Developer</title>
        <meta
          name="description"
          content="Portafolio de Grimaldo Sánchez, desarrollador front-end (React, Next.js, Tailwind CSS). Proyectos reales, rendimiento top y UX cuidada."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://portafolio-grimaldo.vercel.app/" />
      </Head>
      <Header />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
