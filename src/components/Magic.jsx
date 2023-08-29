import "./css/Magic.css";
import woe from "../assets/woe.jpg";
import lotr from "../assets/lotr.jpg";
import mom from "../assets/mom.png";
import { Link } from "react-router-dom";

const Magic = () => {
  return (
    <>
      <div className="magic_container">
        <Link to="/magic/woe">
          <div id="woe">
            <img src={woe} width="700px" />
          </div>
        </Link>
        <Link to="/magic/ltr">
          <div id="lotr">
            <img src={lotr} width="700px" />
          </div>
        </Link>
        <Link to="/magic/mom">
          <div id="mom">
            <img src={mom} width="700px" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Magic;
