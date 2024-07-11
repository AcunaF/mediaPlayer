import React from "react";
import { TbBackground } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./unplug.styles.scss";
import Juegos from "../../../../components/games/games";
import NewsFeed from "../../../../components/noticias/noticiasTendencia";
import Videos from "../../../../components/videos/videos";
//import { Slider } from "../../../core/carousel/carousel.component";
const Unplug = () => {
  const navigate = useNavigate();
  const handleBaaack = () => {
    navigate("/principal");
  };
  return (
    <>
      <div className="unplug-container">
        <h1>Unplug</h1>
        <h1 className="">
          Unplug te permite disfrutar de juegos, noticias y videos.
        </h1>
        <Juegos />
        <NewsFeed />
        {/*  <Slider />*/}
        <Videos />
        <button className="btn btn-secondary" onClick={handleBaaack}>
          Back to principal <TbBackground></TbBackground>
        </button>
      </div>
    </>
  );
};

export default Unplug;
