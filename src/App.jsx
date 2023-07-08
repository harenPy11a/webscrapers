import { useState } from "react";
import AboutUsBlock from "./Sections/AboutUs";
import ContactBlock from "./Sections/Contact";
import DescriptionBlock from "./Sections/Description";
import ExampleBlock from "./Sections/Example";
import FAQBlock from "./Sections/FAQ";
import TitleBlock from "./Sections/Title";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TitleBlock />
      <div className="pb-[950px]"></div>
      <DescriptionBlock />
      <ExampleBlock />
      <AboutUsBlock />
      <FAQBlock />
      <ContactBlock />
    </div>
  );
}

export default App;
