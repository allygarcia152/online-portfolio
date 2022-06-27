import React from "react";
import Nav from "./components/Nav";
import Icons from "./components/Icons";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Icons></Icons>
        <About></About>
      </main>
    </div>
  );
}

export default App;
