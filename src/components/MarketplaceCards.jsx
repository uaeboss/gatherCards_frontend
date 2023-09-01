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
  // setCartItemsCount,
  // cartItemsCount
}) => {
  const { cart, setCart } = useContext(stateContext);

  const handleclick = () => {
    let existingCard = cart.find((e) => e?.cardId === cardId);
    if (existingCard !== undefined) {
      let newCart = cart.map((e) =>
        existingCard.cardId === e.cardId ? { ...e, amount: (e.amount += 1) } : e
      );
      console.log(newCart);
      setCart(newCart);
    } else {
      console.log(cardId);
      let currentCard = { cardId, name, qty, price, image, seller, amount: 1 };
      // console.log(currentCard);
      // cart.push(currentCard);
      setCart([...cart, currentCard]);
    }
    console.log(cart);
    console.log();
    };

  return (
    <>
      <div id="marketplacecards_container">
        <img id="border_radius" src={image} width="250px" />
        <div id="marketplacecards_text">
          <p>Name: {name}</p>
          <p>Number of available cards: {qty}</p>
          <p>Price per card:{price} €</p>
          <p>Seller: {seller}</p>
          <button id="marketplacecards_add_btn" onClick={handleclick}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
