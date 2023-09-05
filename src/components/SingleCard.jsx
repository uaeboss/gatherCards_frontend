import "./css/SingleCard.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SingleCard = () => {
  const [showadded, setshowadded] = useState(false);
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!qty || !price) return toast("Please fill out every field!");
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/cards`,
        {
          id: currentCard?.id,
          name: currentCard?.name,
          qty,
          price,
          image: currentCard?.image_uris.normal,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setshowadded(true);
      setTimeout(() => {
        navigate(`/marketplace`, { replace: true });
      }, 2000);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetch(`https://api.scryfall.com/cards/${cardid}`)
      .then((res) => res.json())
      .then((targetCard) => {
        setCurrentCard(targetCard);
      });
  }, [cardid]);

  return (
    <>
      {showadded ? (
        <h2 id="res_success">Card added successfully!</h2>
      ) : (
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
                  <b>Type:</b> {currentCard?.type_line}
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
                        min="0.01"
                        step="any"
                        placeholder="Price"
                        onChange={onChangeHandler}
                      />
                      <i>€</i>
                    </div>
                  </div>
                  <button id="btn_sellcard" type="submit">
                    Sell Card
                  </button>
                </form>
              </div>
              <button id="sell_back_btn" onClick={() => navigate("/auth/create")}>Zurück</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
