import "./App.css";
import AboutUs from "./Sections/AboutUs";
import Contact from "./Sections/Contact";
import Description from "./Sections/Description";
import Example from "./Sections/Example";
import Navbar from "./Sections/Navbar";
import Title from "./Sections/Title";
function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Description />
      <Example />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
