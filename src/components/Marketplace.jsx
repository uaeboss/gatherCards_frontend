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
          <>
            <h3>
              Aufgrund der Verwendung von der kostenfreien Version von
              render.com kann es einige Zeit dauern bis die Inhalte verfügbar
              sind.
            </h3>
            <br />
            <br />
            <h3>
              Due to the use of the free version of render.com, it may take some
              time until the content is available.
            </h3>
            <br />
            <br />
            <br />
            <br />
            <Loading />
          </>
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
