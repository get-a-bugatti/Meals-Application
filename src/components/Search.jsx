import { useState, useContext } from "react";
import { AppContext } from "../Context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandom } = useContext(AppContext);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (text) {
      setSearchTerm(text);
      setText("");
    }
  }

  function handleRandomMeal(event) {
    setSearchTerm("");
    setText("");
    fetchRandom(event);
  }

  return (
    <header className="app-header">
      <form>
        <input
          type="text"
          className="form-input"
          placeholder="Type the meal name here ..."
          value={text}
          onChange={handleTextChange}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-hipster" onClick={handleRandomMeal}>
          Surprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
