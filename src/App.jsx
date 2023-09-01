import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Marketplace } from "./components/Marketplace";
// import { News } from "./components/News";
import LoginForm from "./components/LoginForm";
import Shoppingcart from "./components/Shoppingcart";
import Registration from "./components/Registration";
import ProtectedLayout from "./components/ProtectedLayout";
import GlobalLayout from "./components/GlobalLayout";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import { getUser } from "./utils/authenticationUtils";
import Loading from "./components/Loading";
import Magic from "./components/Magic";
import Sets from "./components/Sets";
import SellCard from "./components/SellCard";
import { stateContext } from "./context/stateContext.jsx";
import { SingleCard } from "./components/SingleCard";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuthRequest, setLoadingAuthRequest] = useState(false);
  const [magicFormats, setMagicFormats] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const formatUrl =
    "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Awoe&unique=prints";

  let { params } = useParams();

  useEffect(() => {
    fetch(formatUrl)
      .then((res) => res.json())
      .then((allCards) => {
        setMagicFormats(allCards);
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
        magicFormats,
        cart,
        setCart,
        cartItemsCount,
        setCartItemsCount
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
                <Route path="magic" element={<Magic />} />
                <Route
                  path="magic/:params"
                  element={<Sets params={params} />}
                />

                {/* <Route path="news" element={<News />} /> */}
                <Route path="marketplace" element={<Marketplace />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<Registration />} />
                <Route path="auth" element={<ProtectedLayout />}>
                  <Route index element={<UserProfile />} />
                  <Route path="shoppingcart" element={<Shoppingcart />}/>
                  <Route path="create" element={<SellCard />} />
                  <Route path="create/:cardid" element={<SingleCard />} />
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
