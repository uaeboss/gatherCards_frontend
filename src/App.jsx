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
import CreateCard from "./components/CreateCard";
import ProtectedLayout from "./components/ProtectedLayout";
import GlobalLayout from "./components/GlobalLayout";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";

function App() {
  const [magicUrl, setMagicUrl] = useState(
    "https://api.magicthegathering.io/v1/cards"
  );
  const [magicCards, setMagicCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuthRequest, setLoadingAuthRequest] = useState(false);

  useEffect(() => {
    fetch(magicUrl)
      .then((res) => res.json())
      .then((allCards) => {
        setMagicCards(allCards);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const validateToken = async () => {
      try {
        setLoadingAuthRequest(true);
        const { data, error } = await getUser(token);
        if (error) throw error;
        setUser(data);
        setIsAuthenticated(true);
        setLoadingAuthRequest(false);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        setLoadingAuthRequest(false);
        console.log(error.message);
      }
    };
    token && validateToken();
  }, [token]);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <p>is Loading!</p>;
  }

  return (
    <>
      <div className="wrapper">
        <div className="content_container">
          <div className="header">
            <Navigation isAuthenticated={isAuthenticated} user={user} />
          </div>
          <div className="sidenavl"></div>
          <div className="sidenavr"></div>
          <div className="site_content">
            <Routes>
              <Route path="/" element={<GlobalLayout />}>
                <Route index element={<Home magic={magicCards.cards} />} />
                <Route path="marketplace" element={<Marketplace />} />
                <Route
                  path="login"
                  element={
                    <LoginForm
                      isAuthenticated={isAuthenticated}
                      setIsAuthenticated={setIsAuthenticated}
                      setToken={setToken}
                      loadingAuthRequest={loadingAuthRequest}
                      setLoadingAuthRequest={setLoadingAuthRequest}
                    />
                  }
                />
                <Route
                  path="register"
                  element={
                    <Registration
                      isAuthenticated={isAuthenticated}
                      setIsAuthenticated={setIsAuthenticated}
                      setToken={setToken}
                      loadingAuthRequest={loadingAuthRequest}
                      setLoadingAuthRequest={setLoadingAuthRequest}
                    />
                  }
                />
                <Route
                  path="auth"
                  element={
                    <ProtectedLayout isAuthenticated={isAuthenticated} />
                  }
                >
                  <Route index element={<UserProfile user={user} />} />
                  <Route path="create" element={<CreateCard />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
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
