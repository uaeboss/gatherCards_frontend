import { Link } from "react-router-dom";
import Loading from "./Loading";


const UserProfile = ({ user }) => {
    return user? (
        <div>
            <h1>Welcome back, {user.username}</h1>
            <p>Do u want to sell a few cards? <Link to="/auth/create">Sell a card</Link></p>
            <p>Do want to see the available cards? <Link to="/">See available cards</Link></p>
        </div>
    ) : (
        <Loading />
    )
}

export default UserProfile;