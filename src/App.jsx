import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./components/Home";
import Footer from "./components/Footer";
import SideNavigation from "./components/SideNavigation";
import { useState, useEffect } from "react";

function App() {

  const [magicUrl, setMagicUrl] = useState("https://api.magicthegathering.io/v1/cards");
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
      <div className="content_container">
        <div className="header">
          <Navigation />
        </div>
        <div className="sidenav">
          <SideNavigation />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home magic={magicCards.cards} />} />
            {/* <Route path="magicthegathering" /> */}
            {/* <Route path="yugioh" /> */}
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
