import backgroundImage from "../../assets/banner.jpg";
import "./banner.style.scss";

export const FullScreenImage = () => {
  return (
    <div className="bannerImg">
      <img src={backgroundImage} alt="background" width="710" height="400" />
    </div>
  );
};
