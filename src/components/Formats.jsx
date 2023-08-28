import SingleCard from "./SinlgeCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Formats = () => {
  const [formatCards, setFormatCards] = useState();
  let { params } = useParams();

  console.log("test:", formatCards && formatCards);

  useEffect(() => {
    fetch(`https://api.magicthegathering.io/v1/cards?format=${params}`)
      .then((res) => res.json())
      .then((allCards) => {
        setFormatCards(allCards);
      });
  }, [params]);

  console.log('params:', params);
  return (
    <>
      <p>Here are the Formats</p>
      {formatCards?.cards.map((card) => {
        return (
          <>
            <p key={card.id}>{card.name}</p>
            <img src={card.imageUrl} />
          </>
        );
      })}
    </>
  );
};

export default Formats;
