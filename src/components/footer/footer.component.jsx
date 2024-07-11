import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa"; // Importa los iconos que necesitas
import "./footer.styles.scss";
import descarga6 from "../../assets/images/multitud-de-conciertos-de-música-rock.jpg";
const Footer = () => {
  return (
    <>
      <div
        className="overlay"
        style={{
          marginTop: "10px",
          border: "2px",
          boxShadow: "2",
          height: "300px",
          backgroundImage: `url(${descarga6})`,
        }}
      ></div>
      <div className="footer-container">
        <div className="footer-container">
          <div className="payment-methods">
            <p>Nuestros métodos de pago:</p>
            <FaCcVisa size={60} style={{ margin: "0 1em" }} />
            <FaCcMastercard size={60} style={{ margin: "0 1em" }} />
            <FaCcPaypal size={60} style={{ margin: "0 1em" }} />
            <FaCcAmazonPay size={60} style={{ margin: "0 1em" }} />
          </div>
          {/* Resto del código del footer */}
        </div>{" "}
        <div>
          <footer
            className="footer"
            style={{
              backgroundColor: "#2d2d2d",
              color: "white",
              height: "100px",
              justifyContent: "center",
              padding: "0.58 rem",
            }}
          >
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 1em" }}
            >
              <FaFacebook size={60} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 1em" }}
            >
              <FaTwitter size={60} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 1em" }}
            >
              <FaInstagram size={60} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 1em" }}
            >
              <FaLinkedin size={60} />
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
