import { useContext } from "react";
import { stateContext } from "../context/stateContext.jsx";
import "./css/MarketplaceCards.css";

export const MarketplaceCards = ({
  cardId,
  name,
  qty,
  price,
  image,
  seller,
}) => {
  const { cart, setCart } = useContext(stateContext);

  const handleclick = () => {
    let existingCard = cart?.find((e) => e?.cardId === cardId);
    if (existingCard !== undefined) {
      let newCart = cart.map((e) =>
        existingCard.cardId === e.cardId ? { ...e, amount: (e.amount += 1) } : e
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    } else {
      let currentCard = { cardId, name, qty, price, image, seller, amount: 1 };
      cart &&
        localStorage.setItem("cart", JSON.stringify([...cart, currentCard]));
      cart && setCart([...cart, currentCard]);
    }
  };

  return (
    <>
      <div id="marketplacecards_container">
        <img id="border_radius" src={image} width="250px" />
        <div id="marketplacecards_text">
          <p>Available cards: {qty}</p>
          <p>Price: {price.toFixed(2)} €</p>
          <p>Seller: {seller}</p>
          <button id="marketplacecards_add_btn" onClick={handleclick}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
