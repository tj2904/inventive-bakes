import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders key homepage headings", () => {
  render(<App />);
  expect(screen.getByText("Welcome to")).toBeInTheDocument();
  expect(screen.getByText("Inventive Bakes")).toBeInTheDocument();
  expect(screen.getByText("Favourite Inventive Bakes")).toBeInTheDocument();
});

it("renders gallery cards with instagram links", () => {
  const { container } = render(<App />);
  const galleryImages = container.querySelectorAll(".GalleryContainer img");
  const galleryLinks = container.querySelectorAll(".GalleryContainer a.link");

  expect(galleryImages).toHaveLength(6);
  expect(galleryLinks).toHaveLength(6);

  const hrefs = Array.from(galleryLinks).map((link) => link.getAttribute("href"));
  expect(hrefs).toContain("https://www.instagram.com/p/B0LFqIpH_GS/");
  expect(hrefs).toContain("https://www.instagram.com/p/BxLYDGupKxZ/");
});

it("renders social links and footer attribution", () => {
  const { container } = render(<App />);

  const facebook = container.querySelector('a.facebook');
  const instagram = container.querySelector('a.instagram');
  const author = screen.getByRole("link", { name: /Tim Jackson/i });

  expect(facebook).toHaveAttribute("href", "https://www.facebook.com/gemmalewis1");
  expect(instagram).toHaveAttribute("href", "https://www.instagram.com/inventivebakes/");
  expect(author).toHaveAttribute("href", "https://tj2904.com");
  expect(screen.getByText(/Copyright/)).toBeInTheDocument();
});
