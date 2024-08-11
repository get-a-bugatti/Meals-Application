import { useContext } from "react";
import { AppContext } from "../Context";

const Modal = () => {
  const { selectedMeal, unshowModal } = useContext(AppContext);
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={selectedMeal.strMealThumb} className="modalImg" />

        <div className="modal-description">
          <h2 className="modal-title">{selectedMeal.strMeal}</h2>
          <h5>
            <strong>Cooking Instructions</strong>
          </h5>
          <p>{selectedMeal.strInstructions}</p>
          <a
            className="modal-source"
            target="_blank"
            href={selectedMeal.strSource}
          >
            Original Source
          </a>
          <button className="modal-close" onClick={unshowModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
