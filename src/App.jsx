import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./components/Home";
import Footer from "./components/Footer";
import SideNavigation from "./components/SideNavigation";


function App() {
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
            <Route path="/" element={<Home />} />
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
