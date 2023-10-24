import axios from "axios";
import "./css/Marketplace.css";
import { useEffect, useState } from "react";
import { MarketplaceCards } from "./MarketplaceCards";
import { toast } from "react-toastify";
import Loading from "./Loading";

export const Marketplace = () => {
  const [availableCards, setAvailableCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAvailableCards = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKENDURL}/cards`
        );
        setAvailableCards(data);
        setLoading(false);
      } catch (error) {
        toast.error(error);
        setLoading(false);
      }
    };
    getAvailableCards();
  }, []);
  
  return (
    <>
      <div id="marketplace_container">
        {loading ? (
          <Loading />
        ) : (
          availableCards?.map((card) => (
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
          ))
        )}
      </div>
    </>
  );
};