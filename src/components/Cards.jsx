import CardSubject from "./CardSubject";
import "./css/Cards.css";
import { useState, useEffect } from "react";

const Cards = () => {
  const [setsUrl, setSetsUrl] = useState(
    "https://api.magicthegathering.io/v1/formats"
  );
  const [magicFormats, setMagicFormats] = useState([]);

  useEffect(() => {
    fetch(setsUrl)
      .then((res) => res.json())
      .then((allFormats) => {
        setMagicFormats(allFormats);
      });
  }, []);

  console.log(magicFormats);

  return (
    <>
      <h2 id="margin_h2">Formats:</h2>
      <div className="cards_container">
         {magicFormats.formats?.map((format) => {
            return <CardSubject key={format} format={format} />;
          })}
      </div>
    </>
  );
};

export default Cards;
