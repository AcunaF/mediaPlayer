import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.componet.scss";
import { Carousel } from "react-bootstrap";
import imagen1 from "../../../assets/images/sistem.jpeg";
import imagen2 from "../../../assets/images/nirvana.jpg";
import descarga7 from "../../../assets/images/pink.jpg";

const Slider = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="line -right">
        <img className="d-block w-100" src={imagen1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="line -top">
        <img className="d-block w-100" src={imagen2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="line -left">
        <img className="d-block w-100" src={descarga7} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export { Slider };
