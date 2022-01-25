import { NavLink } from "react-router-dom";

const Franchise = ({ card }) => {
  return (
    <li>
      <NavLink className="franchise" to={`/${card.id}`}>
        <img className="franchise__image" src={card.image} />
        <div>
          <h4>{card.title}</h4>
          <p>Статус: на модерации?</p>
        </div>
      </NavLink>
    </li>
  );
};

export default Franchise;
