import React, { useEffect, useState } from "react";
import axios from "axios";

// INDIRECT Method of using Context

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // LINK to APIs
  const searchRandom = "https://www.themealdb.com/api/json/v1/1/random.php";

  // STATE Variables
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("Favorites")) || [],
  );

  // Select Meal and Show Modal description
  const selectMeal = (idMeal) => {
    // Selects meal to show modal.
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal);

    setSelectedMeal(meal);
    setShowModal(true);
  };

  // Remove Modal after Close button
  const unshowModal = () => {
    setShowModal(false);
    setSelectedMeal(null);
  };

  // Fetch a certain meal or meals.
  const fetchMeals = async (url) => {
    setLoading(true);

    try {
      const { data } = await axios(url);

      if (data.meals) {
        setMeals(data.meals);
      }
    } catch (error) {
      console.error(error.response);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
    );
  }, [searchTerm]);

  // Fetch Random Meals
  const fetchRandom = (event) => {
    event.preventDefault();
    fetchMeals(searchRandom);
  };

  // Add & Remove To and From Favorites :
  const addToFavorites = (idMeal) => {
    const alreadyInFavorites = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyInFavorites) return;

    const meal = meals.find((meal) => meal.idMeal === idMeal);

    const updatedFavorites = [...favorites, meal];
    setFavorites(updatedFavorites);
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);

    setFavorites(updatedFavorites);
  };

  //Save Favorites to Local Storage :
  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchTerm,
        fetchRandom,
        showModal,
        selectMeal,
        selectedMeal,
        unshowModal,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

// DIRECT Method

// export const useGlobalContext = () => {
//   return useContext(AppContext)
// }
