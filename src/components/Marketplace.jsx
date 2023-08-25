import axios from "axios";
import { useEffect, useState } from "react";

export const Marketplace = () => {
  
    const [availableCards, setAvailableCards] = useState([]);

    useEffect(() => {
      const getAvailableCards = async () => {
        try {
          const { data } = await axios.get(`http://localhost:8080/cards`);
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
