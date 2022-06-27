import React from "react";
import Nav from "./components/Nav";
import Icons from "./components/Icons";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main className="d-flex flex-row m-2 p-2">
        <Icons></Icons>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
