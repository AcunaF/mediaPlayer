import React from "react";
import { TbBackground } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import SocialMediaCard from "./socialCards";
import ContactForm from "../../../../components/contacto/contact";
import "./sNetwork.scss";
import Testimonials from "../../../../components/testimonials/testimonials";
import ImageGallery from "../../../../components/imagesGallery/imagesGallery";
import ShareButtons from "../../../../components/shareButton/sharedButtons";
const profiles = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    platform: "facebook",
    description: "Conéctate con nosotros en Facebook",
    followers: "5000",
  },
  {
    name: "Gmail",
    url: "https://gmail.com",
    platform: "gmail",
    description: "Envíanos un correo electrónico",
    followers: " ",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    platform: "twitter",
    description: "Síguenos en Twitter para actualizaciones",
    followers: "8000",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    platform: "instagram",
    description: "Mira nuestras fotos en Instagram",
    followers: "12000",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    platform: "linkedin",
    description: "Conéctate profesionalmente en LinkedIn",
    followers: "3000",
  },
];
const testimonialsData = [
  { text: "Great content and updates!", author: "John Doe" },
  { text: "I love following your posts.", author: "Jane Smith" },
];

const imagesData = [
  { src: "/sistem.jpeg", alt: "System en River" },
  { src: "/images1.png", alt: "Dart - streaming" },
];

const Social = ({ url, title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/principal");
  };

  return (
    <>
      <div className="container-redes">
        <h1>Social Networks</h1>
        <div className="cards-container">
          {profiles.map((profile, index) => (
            <SocialMediaCard key={index} {...profile} />
          ))}
        </div>

        <div className="page-header">
          <h1>Follow Us on Social Media</h1>
          <p>Stay connected with us through our social media channels.</p>
          <ShareButtons />
        </div>

        <div className="testimonials">
          <h2>Testimonials</h2>
          <Testimonials testimonials={testimonialsData} />
        </div>
        <div className="images">
          <ImageGallery images={imagesData} />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
        <div>
          <button onClick={handleBack}>
            Back to principal <TbBackground />
          </button>
        </div>
      </div>
    </>
  );
};

export default Social;
