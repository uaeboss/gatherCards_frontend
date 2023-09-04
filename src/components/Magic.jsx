import "./css/Magic.css";
import woe from "../assets/woe.jpg";
import lotr from "../assets/lotr.jpg";
import mom from "../assets/mom.png";
import one from "../assets/one.png";
import bro from "../assets/bro.png";
import dmu from "../assets/dmu.jpg";
import snc from "../assets/snc.jpg";
import neo from "../assets/neo.jpg";
import vow from "../assets/vow.jpg";
import { Link } from "react-router-dom";

const Magic = () => {
  return (
    <>
      <div className="magic_container">
        <Link to="/magic/woe">
            <img id="woe" src={woe} width="600px" />
        </Link>
        <Link to="/magic/ltr">
            <img id="lotr" src={lotr} width="600px" />
        </Link>
        <Link to="/magic/mom">
            <img id="mom" src={mom} width="600px" />
        </Link>
        <Link to="/magic/one">
            <img id="one" src={one} width="600px" />
        </Link>
        <Link to="/magic/bro">
            <img id="bro" src={bro} width="600px" />
        </Link>
        <Link to="/magic/dmu">
            <img id="dmu" src={dmu} width="600px" />
        </Link>
        <Link to="/magic/snc">
            <img id="snc" src={snc} width="600px" />
        </Link>
        <Link to="/magic/neo">
            <img id="neo" src={neo} width="600px" />
        </Link>
        <Link to="/magic/vow">
            <img id="vow" src={vow} width="600px" />
        </Link>
      </div>
    </>
  );
};

export default Magic;
