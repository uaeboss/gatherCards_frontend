import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/CreateCard.css"

const CreateCard = () => {
  const [{ title,image,qty,price,available }, setFormState] = useState({
    title: "",
    image:"",
    qty:0,
    price:0,
    available:true
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const isAvailable = (e) =>
    setFormState((prev) => ({ ...prev, available:  e.target.name==="notavailable"?false:true }));

    const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!title) return alert("Please fill out every field!");
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/cards`,
        {
          title,
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

  return (
    <>
      <div id="createcard_container">
        <div id="form_size_createcard">
          <h1>Add a card</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeHandler}
          />
          <input type="text" name="image" placeholder="Image-url" id="image" onChange={onChangeHandler} />
          <input type="number" min={0} name="qty"id="qty" onChange={onChangeHandler}/>
          <input type="number" name="price" id="price"  onChange={onChangeHandler}/>
          <input type="radio" id="available" name="available" value="available"  onChange={isAvailable}/>
          <label htmlFor="available">available</label>
          <input type="radio" id="notavailable" name="notavailable" value="notavailable"  onChange={isAvailable}/>
          <label htmlFor="notavailable">notavailable</label>
          <button id="createcard_btn" type="submit">
              Sell Card
            </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default CreateCard;
