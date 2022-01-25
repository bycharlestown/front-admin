import { NavLink } from "react-router-dom";

const Franchise = ({ card }) => {
  return (
    <li className="franchise">
      <NavLink to={`/${card.id}`} className="franchise__link">
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
