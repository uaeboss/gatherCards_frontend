import "./css/Home.css"
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  
  const [availableCards, setAvailableCards] = useState([]);

  useEffect(() => {
    const getAvailableCards = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/cards");
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

export default Home;
