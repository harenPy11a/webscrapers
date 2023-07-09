import OurWork from "./Sections/OurWork";
import Contact from "./Sections/Contact";
import Description from "./Sections/Description";
import AboutUs from "./Sections/AboutUs";
import Navbar from "./Sections/Navbar";
import Title from "./Sections/Title";
import FAQ from "./Sections/FAQ";
function App() {
  return (
    <div className="bg-[#F4F1EC] ">
      <Navbar />
      <Title />
      <Description />
      <OurWork />
      <FAQ />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
