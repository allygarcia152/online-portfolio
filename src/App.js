import React from "react";
import Nav from "./components/Nav";
import Icons from "./components/Icons";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-wrap view-port">
        <Nav></Nav>
        <main className="flex md:flex-row md:m-2 sm:m-0 p-2 sm:flex-col md:place-items-start">
          <Icons />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/resume" element={<Resume />} />
            <Route exact path="/" element={<About />} />
            <Route path="*" element={() => <p>404 not found</p>} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
