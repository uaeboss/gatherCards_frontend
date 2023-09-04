import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useContext } from "react";
import { stateContext } from "../context/stateContext.jsx";


const UserProfile = () => {

    const {user} = useContext(stateContext)

    return user? (
        <div>
            <h1>Welcome back, {user.username}</h1>
            <p>Do u want to sell a few cards? <Link to="/auth/create">Sell a card</Link></p>
            <p>Do want to see the available cards? <Link to="/marketplace">See available cards</Link></p>
        </div>
    ) : (
        <Loading />
    )
}

export default UserProfile;