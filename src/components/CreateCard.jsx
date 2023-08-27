import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/CreateCard.css"

const CreateCard = () => {
  const [{ title }, setFormState] = useState({
    title: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

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
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeHandler}
          ></input>
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
