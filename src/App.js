import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Franchises from "./components/Franchises";
import Edit from "./components/Edit";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(cardsFromServer);
    };

    getCards();
  }, []);

  const fetchCards = async () => {
    console.log("start fetching");
    try {
      const res = await fetch("https://localhost:5000/api/parsing_info");

      const data = await res.json();

      return data;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Franchises cards={cards} />} />
        <Route path="/:id" element={<Edit cards={cards} />} />
      </Routes>
    </>
  );
}

export default App;
