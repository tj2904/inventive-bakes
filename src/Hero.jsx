import React from "react";
import "./css/hero.css";
import hero from "./images/hero-area.jpg";
import LazyHero from "react-lazy-hero";
import Social from "./Social";

export default function Hero() {
  return (
    <LazyHero
      imageSrc={hero}
      opacity={0.6}
      color="#000"
      minHeight="100vh"
      parallaxOffset={100}
    >
      <h5 className="hero-heading script-font">Welcome to</h5>
      <h1 className="head-title">Inventive Bakes</h1>
      <p className="hero-heading script-font">cakes and sugar flowers</p>
      <Social />
    </LazyHero>
  );
}
