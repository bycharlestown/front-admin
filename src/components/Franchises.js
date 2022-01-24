import { NavLink } from "react-router-dom";
import Franchise from "./Franchise";
const Franchises = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => (
        <Franchise key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default Franchises;
