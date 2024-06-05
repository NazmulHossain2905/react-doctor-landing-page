import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="bg-[#F2F7FF]">
        <Navbar />
        <Hero />
        <ListItems />
      </div>

      <About />
    </>
  );
}

export default App;
