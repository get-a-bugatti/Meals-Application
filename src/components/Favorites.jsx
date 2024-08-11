import { useContext } from "react";
import { AppContext } from "../Context";
import { MdDelete } from "react-icons/md";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(AppContext);

  return (
    <section className="favorites">
      <h3>Favorites</h3>
      <div className="favorites-container">
        {favorites.map((meal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = meal;

          return (
            <div className="favorites-item" key={idMeal} id={idMeal}>
              <img src={image} alt={title} className="favorites-img" />
              <button
                className="favorites-removeBtn"
                onClick={() => removeFromFavorites(idMeal)}
              >
                <MdDelete />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favorites;
