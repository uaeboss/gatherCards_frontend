import { Link } from "react-router-dom";
import "./css/LoginForm.css";
import Loading from "./Loading";
import { useContext } from "react";
import { stateContext } from "../context/stateContext.jsx";


const UserProfile = () => {

    const {user} = useContext(stateContext)

    return user? (
        <div>
            <h1 id="h1_welcome">Welcome back, {user.username}!</h1>
            <h2 id="h2_welcome">List your cards for sale: <Link to="/auth/create">Sell a card</Link></h2>
            <h2 id="h2_welcome">Check out the latest cards in the Marketplace: <Link to="/marketplace">See available cards</Link></h2>
        </div>
    ) : (
        <Loading />
    )
}

export default UserProfile;