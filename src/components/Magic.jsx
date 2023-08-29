import "./css/Magic.css";
import woe from "../assets/woe.jpg";
import lotr from "../assets/lotr.jpg";
import mom from "../assets/mom.png";
import one from "../assets/one.png";
import { Link } from "react-router-dom";

const Magic = () => {
  return (
    <>
      <div className="magic_container">
        
        <Link id="woe" to="/magic/woe">
            <img src={woe} width="700px" />
        </Link>
        <Link id="lotr" to="/magic/ltr">
            <img src={lotr} width="700px" />
        </Link>
        <Link id="mom" to="/magic/mom">
            <img src={mom} width="700px" />
        </Link>
        <Link id="one" to="/magic/one">
            <img src={one} width="700px" />
        </Link>
      </div>
    </>
  );
};

export default Magic;
