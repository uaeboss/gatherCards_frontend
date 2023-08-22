import Select from "react-select";
import { useState } from "react";
import logo from "../assets/magic_logo_2.png";
import yugiohlogo from "../assets/yugioh_logo.png";

const CardgameDropdown = () => {
  const [cardgameSelect, setCardgameSelect] = useState(null);
  const [topImage, setTopImage] = useState("");

  

  const onChangeHandler = (selectedOption) => {
    setCardgameSelect(selectedOption.value);
    if (selectedOption.value === "magicthegathering") {
      setTopImage(logo)
    } else {
      setTopImage(yugiohlogo)
    }
  };

  const onClickHandler = () => {
    setCardgameSelect(null);
  }



  const options = [
    { value: "magicthegathering", label: "Magic the Gathering" },
    { value: "yugioh", label: "Yu-Gi-Oh" },
  ];

  return (
    <>
    {!cardgameSelect && (
      <Select
        className="cardgamedropdown_style"
        onChange={onChangeHandler}
        options={options}
        placeholder="Select your Cardgame ..."
      />
      )}
      {cardgameSelect && (
        <>
        <img id="max_width_img" src={topImage} alt="logomagic" onClick={onClickHandler}/>
        </>
      )}
    </>
  );
};

export default CardgameDropdown;
