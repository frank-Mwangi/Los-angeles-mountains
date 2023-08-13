import { useState } from "react";
import Hero from "./components/Hero";
import History from "./components/History";
import Climb from "./components/Climb";
import Accordion from "./components/accordion";
import Footer from "./components/Footer";
function App() {
  const [accord, setAccord] = useState(null);
  const toggleAccord = (value) => {
    if (value === accord) {
      setAccord(null);
    } else {
      setAccord(value);
    }
    console.log(value);
  };

  return (
    <>
      <Hero />
      <Accordion
        title="01. history"
        toggleAccord={toggleAccord}
        accord={accord}
      />
      <History accord={accord} />
      <Accordion
        title="02. climb"
        toggleAccord={toggleAccord}
        accord={accord}
      />
      <Climb accord={accord} />
      <Footer />
    </>
  );
}

export default App;
