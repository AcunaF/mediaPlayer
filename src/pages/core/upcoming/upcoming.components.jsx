import React from "react";
import "./upcomings.styles.scss";
import descarga4 from "../../../assets/images/imagen3.jpg";
import descarga3 from "../../../assets/images/nirvana2.jpg";
import descarga2 from "../../../assets/images/cuerno.jpg";
import descarga1 from "../../../assets/images/descarga1.png";
import descarga6 from "../../../assets/images/multitud-de-conciertos-de-música-rock.jpg";

const Upcoming = () => {
  return (
    <>
      <div className="card-body">
        <div>
          <h1>Upcoming recitals... Spoiler alert damn loser</h1>
        </div>
      </div>
      <div className="container-principal ">
        <div className="lista-cards">
          <div
            className="card card text-white bg-dark mb-3"
            style={{ width: "22rem", margin: 2 }}
          >
            <img src={descarga4} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card card text-white bg-dark mb-3"
            style={{ width: "22rem", margin: 2 }}
          >
            <img src={descarga1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card card text-white bg-dark mb-3"
            style={{ width: "22rem", margin: 2 }}
          >
            <img src={descarga3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card card text-white bg-dark mb-3"
            style={{ width: "22rem", margin: 2 }}
          >
            <img src={descarga2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Upcoming;
