import { useState } from "react";
import Franchise from "./Franchise";
const Franchises = ({ cards }) => {
  // Метод для поиска в названии
  const [value, setValue] = useState("");
  const filteredFranchise = cards.filter((card) => {
    if (card.title === null) return;
    return card.title.toLowerCase().includes(value.toLowerCase());
  });

  // Метод для выпадающего списка
  const [isOpen, setIsOpen] = useState(false);
  const inputClickHandler = () => {
    setIsOpen(true);
  };
  const hideList = () => {
    setIsOpen(!isOpen);
  };

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="franchises"
      onClick={() => {
        hideList();
      }}
    >
      <form className="franchises__search">
        <h3 className="franchises__search-title">Найти франшизу: </h3>
        <input
          className="franchises__search-input"
          type="text"
          value={value}
          placeholder="Какую франшизу ищите?"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onClick={inputClickHandler}
        />
        <button
          className="franchises__search-clear"
          onClick={() => {
            setValue("");
          }}
        >
          Стереть
        </button>
        <ul className="autocomplite">
          {value && isOpen
            ? filteredFranchise.map((card) => (
                <li
                  className="autocomplite__item"
                  key={card.id}
                  onClick={itemClickHandler}
                >
                  {card.title}
                </li>
              ))
            : null}
        </ul>
      </form>

      <ul className="franchises__list">
        {filteredFranchise.map((card) => (
          <Franchise key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default Franchises;
