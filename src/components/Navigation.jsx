import { NavLink } from "react-router-dom";
import CardgameDropdown from "./CardgameDropdown";
import Navigation_Profile from "./NavigationProfile";
import logo from "../assets/logo_white_name.png";
import "./css/Navigation.css";

const Navigation = () => {

  // const [cardgameSelect, setCardgameSelect] = useState(null);

  // const onChangeHandler = (selectedOption) => {
  //   setUserSelect(selectedOption.value);
  // };

  return (
    <>
      <div className="navigation_container">
        <div className="nav_links">
          <img id="start_logo_size" src={logo} alt="logo" />
          <nav>
            <NavLink>Home</NavLink>
            <NavLink>News</NavLink>
            <NavLink>Cardgames</NavLink>
          </nav>
        </div>
        <div className="nav_selector">
          {/* <CardgameDropdown cardgameSelect={cardgameSelect} onChangeHandler={onChangeHandler} /> */}
          <CardgameDropdown />
        </div>
        <div className="nav_profile">
          <Navigation_Profile />
        </div>
      </div>
    </>
  );
};

export default Navigation;
