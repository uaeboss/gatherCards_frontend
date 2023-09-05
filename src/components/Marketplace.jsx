import axios from "axios";
import "./css/Marketplace.css";
import { useEffect, useState } from "react";
import { MarketplaceCards } from "./MarketplaceCards";
import { toast } from "react-toastify";

export const Marketplace = () => {
  const [availableCards, setAvailableCards] = useState([]);

  useEffect(() => {
    const getAvailableCards = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKENDURL}/cards`
        );
        setAvailableCards(data);
      } catch (error) {
        toast.error(error);
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
