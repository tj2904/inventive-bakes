import React from "react";
import "./css/gallery.css";
import { FaInstagram } from "react-icons/fa";

function Gallery(props) {
  // Loop through images using map
  const images = props.gallery.map((images, index) => {
    return (
      // return HTML for each item
      <div key={index} className={"instaImage"}>
        <div className="shot-item">
          <img src={images.imageSrc} alt="" />
          <div className="overlay">
            <div className="icons">
              <a className="link" href={images.url}>
                <i className="icon-link">
                  <FaInstagram />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  // return the HTML
  return <div className="GalleryContainer">{images}</div>;
}

export default Gallery;
