import React from "react";
import AccordionQuestions from "./Components/AccordionQuestions";
import AlgorithmSteps from "./Components/AlgorithmSteps";
import CarouselHome from "./Components/CarouselHome";
import Footer from "./Components/Footer";
import ImageComparison from "./Components/ImageComparison";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import Timeline from "./Components/Timeline";
import ToolsUsed from "./Components/ToolsUsed";

const App = () => {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <Timeline />
      <AlgorithmSteps />
      <ImageComparison />
      <ToolsUsed />
      <Team />
      <AccordionQuestions />
      <Footer />
      {/* <Test /> */}
    </>
  );
};

export default App;
