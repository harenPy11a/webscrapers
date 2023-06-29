import AboutUs from "./Sections/AboutUs";
import Contact from "./Sections/Contact";
import Description from "./Sections/Description";
import Example from "./Sections/Example";
import Navbar from "./Sections/Navbar";
import Title from "./Sections/Title";
import FAQ from "./Sections/FAQ";
import Particle from "./Sections/Particle";
function App() {
  return (
    <div>
      <Title />
      <Description />
      <Example />
      <AboutUs />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
