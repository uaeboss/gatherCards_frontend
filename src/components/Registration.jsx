import "./css/Registration.css"

export const Registration = ({ setLoginActive }) => {
    return ( 
        <>
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
        Already registered?&nbsp;<div id="singin_link" onClick={() => {setLoginActive(true)}}>Log in</div>
        </div>

        </>
     );
}

export default Registration;