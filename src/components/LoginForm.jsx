import "./css/LoginForm.css";
import { Link } from "react-router-dom"

const LoginForm = () => {

    return ( 
        <>
        <div id="loginform_container">
        <div id="form_size_login">
        <form>
            <input type="text" placeholder="Your Name ..."></input>
            <br />
            <input type="password" placeholder="Your password ..."></input>
            <br/>
            <button id="login_btn" type="submit">Login</button>
        </form>
        </div>
        <div id="signup_size">
        <p>Don’t have an account? <Link to="/register">Sign Up</Link></p>
        </div>
        </div>

        </>
     );
}

export default LoginForm;