import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Sets.css";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const Sets = () => {
  const [sets, setSets] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const navigate = useNavigate();
  let { params } = useParams();

  useEffect(() => {
    fetch(
      `https://api.scryfall.com/cards/search?as=grid&order=name&q=%28game%3Apaper%29+set%3A${params}`
    )
      .then((res) => res.json())
      .then((allSets) => {
        setSets(allSets);
      });
  }, [params]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts =
    sets &&
    sets.data
      .filter((cardobject) => cardobject.image_uris)
      .slice(firstPostIndex, lastPostIndex);
  const totalPosts =
    sets && sets.data.filter((cardobject) => cardobject.image_uris).length;

  return (
    <>
      <div id="back_btn_sets">
        <button id="btn_sets" onClick={() => navigate(-1)} >Back to overview</button>
      </div>
      <div id="set_display">
        {currentPosts &&
          currentPosts
            .filter((cardobject) => cardobject.image_uris)
            .map((card) => {
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
      </div>
      <div id="pagination_sets">
        <Pagination
          totalPosts={totalPosts}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Sets;
