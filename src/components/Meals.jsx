import { useContext } from "react";
import { AppContext } from "../Context";
import { FaRegHeart } from "react-icons/fa";

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites } = useContext(AppContext);

  if (loading) {
    return (
      <section className="section-loading">
        <h4>Loading...</h4>
      </section>
    );
  } else {
    if (meals.length < 1) {
      return (
        <section className="no-items">
          <h5
            style={{
              textTransform: "none",
              width: "100%",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            No meals matched your search query. Please try again.
          </h5>
        </section>
      );
    }
    return (
      <div>
        <section className="section-center">
          {meals.map((singleMeal) => {
            const { idMeal, strMeal, strMealThumb: image } = singleMeal;
            return (
              <article key={idMeal} className="single-meal">
                <img
                  src={image}
                  className="img"
                  onClick={() => selectMeal(idMeal)}
                />
                <footer>
                  <h5 style={{ marginBottom: "2px", fontWeight: "bold" }}>
                    {strMeal}
                  </h5>
                  <button
                    className="like-btn"
                    onClick={() => addToFavorites(idMeal)}
                  >
                    <FaRegHeart />
                  </button>
                </footer>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
};

export default Meals;
