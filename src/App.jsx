// * components
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </>
  );
}
