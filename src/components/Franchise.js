import { NavLink } from "react-router-dom";

const Franchise = ({ card }) => {
  return (
    <li className="franchise">
      <NavLink to={`/${card.id}`}>{card.title}</NavLink>
    </li>
  );
};

export default Franchise;
