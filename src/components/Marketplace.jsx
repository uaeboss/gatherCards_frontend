import axios from "axios";
import { useEffect, useState } from "react";

export const Marketplace = () => {
  // const formatUrl = "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Awoe&unique=prints";

    const [availableCards, setAvailableCards] = useState([]);

    useEffect(() => {
      const getAvailableCards = async () => {
        try {
      //     fetch(formatUrl)
      // .then((res) => res.json())
      // .then((allCards) => {

      // });
          const { data } = await axios.get(`${import.meta.env.VITE_BACKENDURL}/cards`);
          setAvailableCards(data);
        } catch (error) {
          console.log("That didnt work out");
        }
      };
      getAvailableCards();
    }, []);
    return (
      <>
        {availableCards.map((card) => (<div key={card._id}>I am the title:{card.title} <br/>
        and I am the id{card._id}</div>))}
      </>
    );
  };
