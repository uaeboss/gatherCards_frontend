import "./css/SingleCard.css";

const SingleCard = ({
  name,
  artist,
  type,
  text,
  power,
  toughness,
  mana,
  image,
}) => {
  console.log("name:", name && name);

  return (
    <>
      <div id="singlecard_container">
        <div id="singlecard_left">
          <img id="img_radius" src={image} width="400px" />
        </div>
        <div id="singlecard_right">
          <div>
            <p>Name: {name}</p>
            <p>Cost: {mana}</p>
            <p>Type: {type}</p>
            <p>Symbol: </p>
            <p>
              Description:
              <br />
              {text}
            </p>
            <p>
              Power/Toughness: {power}/{toughness}
            </p>
            <p id="italic">Illustrated by {artist}</p>
          </div>
          <button id="singlecard_btn">Zurück</button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
