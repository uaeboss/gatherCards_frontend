import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, useEffect, createContext } from "react";
import { Marketplace } from "./components/Marketplace";
import { News } from "./components/News";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";
import CreateCard from "./components/CreateCard";
import ProtectedLayout from "./components/ProtectedLayout";
import GlobalLayout from "./components/GlobalLayout";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import { getUser } from "./utils/authenticationUtils";
import Loading from "./components/Loading";
import Cards from "./components/Cards";
export const stateContext = createContext();

function App() {
  const [magicCards, setMagicCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuthRequest, setLoadingAuthRequest] = useState(false);
  const magicUrl =
    "https://api.magicthegathering.io/v1/cards?format=legacy&page=2";

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

  if (isLoading) return <Loading />;

  return (
    <stateContext.Provider
      value={{
        magicCards,
        setMagicCards,
        isLoading,
        setIsLoading,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        loadingAuthRequest,
        setLoadingAuthRequest,
        logOut,
      }}
    >
      <div className="wrapper">
        <div className="content_container">
          <div className="header">
            <Navigation />
          </div>
          <div className="sidenavl"></div>
          <div className="sidenavr"></div>
          <div className="site_content">
            <Routes>
              <Route path="/" element={<GlobalLayout />}>
                <Route index element={<Home />} />
                <Route path="cards" element={<Cards />} />
                <Route path="news" element={<News />} />
                <Route path="marketplace" element={<Marketplace />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<Registration />} />
                <Route path="auth" element={<ProtectedLayout />}>
                  <Route index element={<UserProfile />} />
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
    </stateContext.Provider>
  );
}

export default App;
