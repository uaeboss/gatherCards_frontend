import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./css/CreateCard.css";
import Pagination from "./Pagination";

const SellCard = ({ search }) => {
  const [searchCard, setSearchCard] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = searchResult.data && searchResult.data.filter((cardobject) => cardobject.image_uris).slice(firstPostIndex, lastPostIndex);
  const totalPosts = searchResult.data && searchResult.data.filter((cardobject) => cardobject.image_uris).length;

  console.log("currentPosts:", currentPosts);
  console.log("lastPostIndex:", lastPostIndex);
  console.log("firstPostIndex:", firstPostIndex);
  console.log("setslength:", totalPosts);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchCard) {
      alert("alert");
    } else {
      axios
      .get(
        `https://api.scryfall.com/cards/search?q=${searchCard}&order=name+-is%3Adoublesided+is%3Aimage_uris`
      )
      .then((response) => {
        setSearchResult(response.data);
      });
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
        {currentPosts &&
          currentPosts.map((card) => {
              return (
                <div id="display_singlecard" key={card.id}>
                  <img
                    id="border_radius"
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
        <div>
          {totalPosts > 8 ? <Pagination
            totalPosts={totalPosts}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          /> : null }
          
        </div>
      </div>
    </>
  );
};

export default SellCard;
