import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Marketplace } from "./components/Marketplace";
import { News } from "./components/News";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";

function App() {
  const [magicUrl, setMagicUrl] = useState(
    "https://api.magicthegathering.io/v1/cards"
  );
  const [magicCards, setMagicCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(magicUrl)
      .then((res) => res.json())
      .then((allCards) => {
        setMagicCards(allCards);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      <div className="wrapper">
        <div className="content_container">
          <div className="header">
            <Navigation />
          </div>
          <div className="sidenavl"></div>
          <div className="sidenavr"></div>
          <div className="site_content">
            <Routes>
              <Route path="/home" element={<Home magic={magicCards.cards} />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<Registration />} />
              {/* <Route path="magicthegathering" /> */}
              {/* <Route path="yugioh" /> */}
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
