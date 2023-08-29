import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/CreateCard.css";

const SellCard = ({ search }) => {
  const [searchCard, setSearchCard] = useState('');
  const [submitCard, setSubmitCard] = useState("glory");
  const [searchResult, setSearchResult] = useState([]);

  // const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`https://api.scryfall.com/cards/search?q=${submitCard}&order=name+-is%3Adoublesided+is%3Aimage_uris`)
      .then((response) => {
        setSearchResult(response.data);
      });
  }, [submitCard]);

  console.log('submitcard:', submitCard);
  console.log('searchresult:', searchResult);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchCard) {
      alert('alert')
    } else {
    setSubmitCard(searchCard);
  }
  };

  return (
    <>
      <div id="createcard_container">
        <div id="form_size_createcard">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="search"
              name="search"
              placeholder="Name"
              value={search}
              onChange={(e) => setSearchCard(e.target.value)}
            />
            <button id="search_btn" type="submit">
              Search
            </button>
          </form>
          
        </div>
      </div>
      <div id="search_results">
      {searchResult.data &&
          searchResult.data.filter((cardobject) => cardobject.image_uris).slice(0, 8).map((card) => {
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

export default SellCard;
