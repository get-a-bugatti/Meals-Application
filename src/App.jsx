import Header from "./components/Header";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AppContext } from "./Context";
import "./App.css";

export default function App() {
  const { favorites, showModal } = useContext(AppContext);

  return (
    <main>
      <Header />
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
      <Footer />
    </main>
  );
}
