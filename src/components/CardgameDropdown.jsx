import Select from "react-select";
import { useState } from "react";
import logo from "../assets/magic_logo.png";
import yugiohlogo from "../assets/yugioh_logo.png";

const CardgameDropdown = () => {
  const [cardgameSelect, setCardgameSelect] = useState(null);
  const [topImage, setTopImage] = useState("");

  

  const onChangeHandler = (selectedOption) => {
    setCardgameSelect(selectedOption.value);
    if (selectedOption.value === "magicthegathering") {
      setTopImage(logo)
      console.log('des passt mit magic');
    } else {
      setTopImage(yugiohlogo)
      console.log('ja nee, das ist yugioh');
    }
  };

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
        <img id="max_width_img" src={topImage} alt="logomagic" />
        </>
      )}
    </>
  );
};

export default CardgameDropdown;
