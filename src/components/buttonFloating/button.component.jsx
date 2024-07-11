import $ from "jquery";
import "./button.styles.scss";

const Buttonadd = () => {
  $(".botonF1").click(function () {
    $(".btn").addClass("animacionVer");
  });
  $(".contenedor").mouseleave(function () {
    $(".btn").removeClass("animacionVer");
  });
  return (
    <div className="button-floating">
      <header>
        <span>Pasa el mouse sobre el Boton flotante</span>
      </header>
      <div className="contenedor">
        <button class="botonF1">
          <span>+</span>
        </button>
        <button className="btn botonF2">
          <span>+</span>
        </button>
        <button className="btn botonF3">
          <span>+</span>
        </button>
        <button className="btn botonF4">
          <span>+</span>
        </button>
        <button className="btn botonF5">
          <span>-</span>
        </button>
      </div>
    </div>
  );
};
export default Buttonadd;
