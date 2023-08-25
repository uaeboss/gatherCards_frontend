import "./css/LoginForm.css";

const LoginForm = ({ setLoginActive }) => {

    return ( 
        <>
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
        Don’t have an account?&nbsp;<div id="singup_link" onClick={() => {setLoginActive(false)}}>Sign Up</div>
        </div>

        </>
     );
}

export default LoginForm;