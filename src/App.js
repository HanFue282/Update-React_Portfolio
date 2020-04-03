import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from  "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return(
        <div>
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        </div>
    )
}

export default App;
