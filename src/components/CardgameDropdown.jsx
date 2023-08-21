import Select from "react-select";

const CardgameDropdown = () => {
    const options = [
        { value: 'magic', label: 'Magic the Gathering' },
        { value: 'yugioh', label: 'Yu-Gi-Oh' }
      ]

  return (
    <>
      <Select className="cardgamedropdown_style" options={options} placeholder="Select your Cardgame ..." />
    </>
  );
};

export default CardgameDropdown;
