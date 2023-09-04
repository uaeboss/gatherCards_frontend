import "./css/Home.css";
import woenews from "../assets/woenews.png";
import twitch from "../assets/twitch.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="home_news_container">
    <Link to="/magic/woe" >
      <div id="woe_news_container">
        <div id="woe_news_text_left">
          <p id="p_announcement">Check out the latest Magic the Gathering set:</p>
          <h2>Wilds of Eldraine</h2>
          <p id="p_small">Will be released on 09/08/2023</p>
          </div>
          <img id="woenews_img_right" src={woenews} width="100%"/>
      </div>
      </Link>
      <Link to="https://www.twitch.tv/directory/category/magic-the-gathering" >
      <div id="woe_news_container">
      <img id="woenews_img_left" src={twitch} width="80%"/>
        <div id="woe_news_text_right">
          <p id="p_announcement">Check out the prerelease-events on Twitch!</p>
          <p id="p_small">From 09/01/2023 to 09/08/2023</p>
          </div>
          
      </div>
      </Link>
      </div>
    </>
  );
};

export default Home;
