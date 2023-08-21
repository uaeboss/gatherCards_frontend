import "./css/LoginForm.css";

const LoginForm = () => {
    return ( 
        <>
        <div id="form_size">
        <form>
            <input type="text" placeholder="Your Name ..."></input>
            <br />
            <input type="password" placeholder="Your password ..."></input>
            <br/>
            <button id="login_btn" type="submit">Login</button>
        </form>
        </div>
        <div id="signup_size">
        Don’t have an account? Sign Up
        </div>

        </>
     );
}

export default LoginForm;