import React from "react";
import "./css/social.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
// https://react-icons.github.io/react-icons

export default function Social() {
  return (
    <div className="social social-icon">
      <a
        className="facebook social-icon"
        href="https://www.facebook.com/gemmalewis1"
      >
        <FaFacebookF />
      </a>
      <a className="instagram" href="https://www.instagram.com/inventivebakes/">
        <FaInstagram />
      </a>
    </div>
  );
}
