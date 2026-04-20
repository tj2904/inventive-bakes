import React from "react";
import "./css/hero.css";
import hero from "./images/hero-area.jpg";
import Social from "./Social";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${hero})`,
      }}
    >
      <h5 className="hero-heading script-font">Welcome to</h5>
      <h1 className="head-title">Inventive Bakes</h1>
      <p className="hero-heading script-font">cakes and sugar flowers</p>
      <Social />
    </section>
  );
}
