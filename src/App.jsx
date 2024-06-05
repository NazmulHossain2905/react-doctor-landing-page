import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";

function App() {
  return (
    <>
      <div className="bg-[#F2F7FF]">
        <Navbar />
        <div>
          <Hero />
          <ListItems />
        </div>
      </div>
    </>
  );
}

export default App;
