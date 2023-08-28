import FormatSubject from "./FormatSubject";
import "./css/Cards.css";
import { useContext } from "react";
import { stateContext } from "../App";
import { Link } from "react-router-dom";

const Cards = () => {
  const { magicFormats } = useContext(stateContext);

  console.log(magicFormats && magicFormats);

  return (
    <>
      <h2 id="margin_h2">Formats:</h2>
      <div className="cards_container">
        {magicFormats.formats?.map((format) => {
          return (
            <Link to={`/formats/${format}`
            } key={format}>
              <FormatSubject format={format} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
