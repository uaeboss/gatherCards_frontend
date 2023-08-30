import "./css/MarketplaceCards.css";

export const MarketplaceCards = ({ id, name, qty, price, image, seller }) => {
  return (
    <>
      <div id="marketplacecards_container">
        <img id="border_radius" src={image} width="250px" />
        <div id="marketplacecards_text">
          <p>Name: {name}</p>
          <p>Number of available cards: {qty}</p>
          <p>Price per card:{price} €</p>
          <p>Seller: {seller}</p>
        </div>
      </div>
    </>
  );
};
