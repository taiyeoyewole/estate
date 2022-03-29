import React, {useState} from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from "./Data/SliderData";
import Dropdown from "./Components/Dropdown";
import InfoSection from "./Components/InfoSection";


function App() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(isOpen)
}

  return (
    <>
    <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection/>
    </>
  );
}

export default App;
