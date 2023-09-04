import "./css/Magic.css";
import woe from "../assets/woe.jpg";
import lotr from "../assets/lotr.jpg";
import mom from "../assets/mom.png";
import one from "../assets/one.png";
import { Link } from "react-router-dom";

const Magic = () => {
  const woeStyle = {
    backgroundImage: `url(${woe})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "600px",
    height: "300px",
  };
  const ltrStyle = {
    backgroundImage: `url(${lotr})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "600px",
    height: "300px",
  };
  const momStyle = {
    backgroundImage: `url(${mom})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "600px",
    height: "300px",
  };
  const oneStyle = {
    backgroundImage: `url(${one})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "600px",
    height: "300px",
  };
  return (
    <>
    <div className="magic_container">
      <Link to="/magic/woe">
        <div id="woe" style={woeStyle}></div>
      </Link>
      <Link to="/magic/ltr">
        <div id="lotr" style={ltrStyle}></div>
      </Link>
      <Link to="/magic/mom">
        <div id="mom" style={momStyle}></div>
      </Link>
      <Link to="/magic/one">
        <div id="one" style={oneStyle}></div>
      </Link>
      </div>
    </>
  );
};

export default Magic;
