import "./css/App.css";
import Hero from "./Hero";
import Gallery from "./Gallery";
import SubHeading from "./SubHeading";
import Footer from "./Footer";
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";
import img5 from "./images/img-5.jpg";
import img6 from "./images/img-6.jpg";

function App() {
  const gallery = {
    images: [
      {
        title: "Image 1",
        url: "https://www.instagram.com/p/B0LFqIpH_GS/",
        imageSrc: img1,
      },
      {
        title: "Image 2",
        url: "https://www.instagram.com/p/B1gB7OvHGn9/",
        imageSrc: img2,
      },
      {
        title: "Image 3",
        url: "https://www.instagram.com/p/BzkQdiEJsG9/",
        imageSrc: img3,
      },
      {
        title: "Image 4",
        url: "https://www.instagram.com/p/ByzlPvJpUKa/",
        imageSrc: img4,
      },
      {
        title: "Image 4",
        url: "https://www.instagram.com/p/BxPEdNHJpw1/",
        imageSrc: img5,
      },
      {
        title: "Image 5",
        url: "https://www.instagram.com/p/BxLYDGupKxZ/",
        imageSrc: img6,
      },
    ],
  };

  return (
    <div>
      <Hero />
      <SubHeading />
      <Gallery gallery={gallery.images} />
      <Footer />
    </div>
  );
}

export default App;
