import AboutUs from "./Sections/AboutUs";
import Contact from "./Sections/Contact";
import Description from "./Sections/Description";
import Example from "./Sections/Example";
import Navbar from "./Sections/Navbar";
import Title from "./Sections/Title";
import FAQ from "./Sections/FAQ";
function App() {
  return (
    <div className="aspect-auto ">
      <Navbar />
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
