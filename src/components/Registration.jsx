import "./css/Registration.css"
import { Link } from "react-router-dom"

export const Registration = () => {
    return ( 
        <>
        <div id="registerform_container">
        <div id="form_size_registration">
        <form>
            <input type="text" placeholder="Username"></input>
            <br />
            <input type="text" placeholder="First name"></input>
            <br />
            <input type="text" placeholder="Last name"></input>
            <br />
            <input type="text" placeholder="Email"></input>
            <br />
            <input type="password" placeholder="Your password ..."></input>
            <br/>
            <input type="password" placeholder="Repeat your password"></input>
            <br/>
            <br/>
            <button id="registration_btn" type="submit">Register</button>
        </form>
        </div>
        <div id="signin_size">
            <p>Already registered? <Link to="/login">Log in</Link></p>
        </div>
        </div>
        </>
     );
}

export default Registration;