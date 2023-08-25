import "./css/Home.css"
import Card from "./Card";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Home = ({ magic }) => {
  

  console.log(magic);
  // const [availableCards, setAvailableCards] = useState([]);

  // useEffect(() => {
  //   const getAvailableCards = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:8080/cards");
  //       setAvailableCards(data);
  //     } catch (error) {
  //       console.log("That didnt work out");
  //     }
  //   };
  //   getAvailableCards();
  // }, []);

  return (
    <>
      I am home!
      <br />
      <br />
      <Card />
      {magic[0].name}
    </>
  );
};

export default Home;
