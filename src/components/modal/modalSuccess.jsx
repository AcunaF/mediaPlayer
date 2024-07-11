import { useNavigate } from "react-router-dom";
import "./modal.styles.scss";
function SuccessModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  const goToPrincipal = () => {
    navigate("/principal");
  };

  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Registro Exitoso</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Tu registro se ha completado con éxito.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={goToPrincipal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuccessModal;
