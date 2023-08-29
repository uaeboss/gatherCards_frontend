import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Sets.css";
import SingleCard from "./SingleCard.jsx";

const Sets = () => {
  const [sets, setSets] = useState();
  let { params } = useParams();

  // console.log("test:", formatCards && formatCards);

  useEffect(() => {
    fetch(
      `https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3A${params}&unique=prints`
    )
      .then((res) => res.json())
      .then((allSets) => {
        setSets(allSets);
      });
  }, [params]);

  console.log("sets:", sets && sets);
  return (
    <>
      <div id="set_display">
        {sets &&
          sets.data.slice(0, 8).map((card) => {
            return (
              <div id="display_singlecard" key={card.id}>
                <img id="border_radius"
                  src={
                    card.image_uris.normal
                      ? card.image_uris.normal
                      : card.image_uris.png
                      ? card.image_uris.png
                      : card.image_uris.small
                      ? card.image_uris.small
                      : card.image_uris.large
                      ? card.image_uris.large
                      : card.image_uris.border_crop
                      ? card.image_uris.border_crop
                      : card.image_uris.art_crop
                      ? card.image_uris.art_crop
                      : ""
                  }
                  width="300px"
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

{
  /* <SingleCard
                name={sets.data[0].name}
                artist={sets.data[0].artist}
                type={sets.data[0].type_line}
                text={sets.data[0].oracle_text}
                power={sets.data[0].power}
                toughness={sets.data[0].toughness}
                mana={sets.data[0].mana_cost}
                image={sets.data[0].image_uris.normal}
              /> */
}

export default Sets;
