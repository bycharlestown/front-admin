import Franchise from "./Franchise";
const Franchises = ({ cards }) => {
  return (
    <ul className="franchises">
      {cards.map((card) => (
        <Franchise key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default Franchises;
