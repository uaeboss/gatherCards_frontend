import axios from "axios";
import "./css/MyCard.css";
import { useEffect, useState, useContext } from "react";
import { stateContext } from "../context/stateContext";
import { useNavigate } from "react-router-dom";

const MyCards = () => {
  const [myCards, setMyCards] = useState([]);
  const [showdeleted, setshowdeleted] = useState(false)
  const { user } = useContext(stateContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getMyCards = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKENDURL}/cards`
        );
        setMyCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMyCards();
  }, []);

  const handleDelete = async (cardId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKENDURL}/cards/${cardId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setshowdeleted(true)
      setTimeout(() => {
      setshowdeleted(false)
      }, 2000);
    } catch (error) {
      console.error("Error deleting card", error);
    }
  };

  return (
    <>
    { showdeleted ? (
        <h2 id="res_success">Card deleted successfully!</h2>
      ) : (
    <div className="center_container">
    <h2 id="h2_green">Your cards available on the marketplace:</h2>
      <div className="mycards_container">
        {myCards &&
          myCards
            .filter((mycard) => mycard.seller._id === user._id)
            .map((mycard) => (
              <div id="mysinglecard_container" key={mycard._id}>
                <img id="border_radius" src={mycard.image}  width="250px" />
                <div id="mycard_display">
                <p id="test_p">Quantity: {mycard.qty}</p>
                <p id="test_p">Price: {mycard.price.toFixed(2)} €</p>
                <button id="marketplacecards_add_btn" onClick={() => handleDelete(mycard._id)}>Delete card</button>
                </div>
              </div>
            ))}
      </div>
      </div>
      )}
    </>
  );
};

export default MyCards;
