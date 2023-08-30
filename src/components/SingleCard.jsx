import "./css/SingleCard.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SingleCard = () => {
  const [{ id, name, qty, price, image }, setFormState] = useState({
    id: "",
    name: "",
    qty: 0,
    price: 0,
    image: "",
  });
  const [currentCard, setCurrentCard] = useState();

  let { cardid } = useParams();

  const navigate = useNavigate();

  const onChangeHandler = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // const isAvailable = (e) =>
  //   setFormState((prev) => ({
  //     ...prev,
  //     available: e.target.name === "notavailable" ? false : true,
  //   }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!qty || !price) return alert("Please fill out every field!");
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/cards`,
        {
          id: currentCard?.id,
          name: currentCard?.name,
          qty,
          price,
          image: currentCard?.image_uris.normal
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      navigate(`/posts/${data._id}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(`https://api.scryfall.com/cards/${cardid}`)
      .then((res) => res.json())
      .then((targetCard) => {
        setCurrentCard(targetCard);
      });
  }, [cardid]);

  // console.log("cardid:", { id });
  // console.log("aktuelle Karte:", id,image_uris,name);
  console.log("aktuelle Karte:", currentCard);

  return (
    <>
      <div id="singlecard_container">
        <div id="singlecard_left">
          <img
            id="img_radius"
            src={currentCard?.image_uris.normal}
            width="400px"
          />
        </div>
        <div id="singlecard_right">
          <div>
            <p>
              <b>Name:</b> {currentCard?.name}
            </p>
            <p>
              <b>Cost:</b>{" "}
            </p>
            <p>
              <b>Type:</b> {currentCard?.type_line}
            </p>
            <p>
              <b>Symbol:</b>{" "}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {currentCard?.oracle_text}
            </p>
            <p>
              <b>Power/Toughness:</b> {currentCard?.power}/
              {currentCard?.toughness}
            </p>
            <p id="italic">
              <b>Illustrated by</b> {currentCard?.artist}
            </p>
          </div>
          <div id="sellcard_form">
            <form id="singlesell_submit" onSubmit={handleSubmit}>
              <div>
                <input
                  type="number"
                  min="1"
                  name="qty"
                  id="qty"
                  placeholder="Quantity"
                  default="1"
                  onChange={onChangeHandler}
                />
                <div className="input-icon input-icon-right">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    min="1"
                    step="any"
                    placeholder="Price"
                    onChange={onChangeHandler}
                  />
                  <i>€</i>
                </div>
              </div>
              <button id="sellcard_btn" type="submit">
                Sell Card
              </button>
            </form>
          </div>
          <button id="singlecard_btn">Zurück</button>
        </div>
      </div>
    </>
  );
};
