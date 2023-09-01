import axios from "axios";
import "./css/Marketplace.css";
import { useEffect, useState } from "react";
import { MarketplaceCards } from "./MarketplaceCards";

export const Marketplace = () => {
  // const formatUrl = "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Awoe&unique=prints";

  const [availableCards, setAvailableCards] = useState([]);

  useEffect(() => {
    const getAvailableCards = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKENDURL}/cards`
        );
        setAvailableCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAvailableCards();
  }, []);

  return (
    <>
      <div id="marketplace_container">
        {availableCards?.map((card) => (
          <div key={card._id}>
            <MarketplaceCards
              cardId={card.id}
              name={card.name}
              image={card.image}
              qty={card.qty}
              price={card.price}
              seller={card.seller.username}
            />
          </div>
        ))}
      </div>
    </>
  );
};
