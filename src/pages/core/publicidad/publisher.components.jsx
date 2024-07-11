import fondo from "../../../assets/images/rock-and-roll.jpg";
import "./publisher.styles.scss";
const Advertisement = () => {
  return (
    <>
      <div className="publicidad">
        <img src={fondo} alt="Anuncio" />
      </div>
    </>
  );
};
export default Advertisement;
