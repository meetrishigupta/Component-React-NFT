import "./styles.css";
import { Component } from "react";
import About from "./About";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
