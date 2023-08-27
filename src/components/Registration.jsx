import "./css/Registration.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../utils/authenticationUtils";

export const Registration = () => {
  const [{ username, first_name, last_name, email, password }, setFormState] =
    useState({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });

  const handleRegisterChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    const handleRegisterSubmit = async e => {
        try {
          e.preventDefault();
          if (!username || !first_name || !last_name || !email || !password)
            throw new Error('All fields are required!');
          setLoadingAuthRequest(true);
          const { data, error } = await registerUser({
            username,
            first_name,
            last_name,
            email,
            password
          });
          if (error) throw error;
          setToken(data.token);
          setIsAuthenticated(true);
          setLoadingAuthRequest(false);
          localStorage.setItem('token', data.token);
        } catch (error) {
          setLoadingAuthRequest(false);
          console.log(error.message);
        }
      };

  return (
    <>
      <div id="registerform_container">
        <div id="form_size_registration">
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleRegisterChange}
            ></input>
            <br />
            <input
              type="text"
              placeholder="First name"
              value={first_name}
              onChange={handleRegisterChange}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Last name"
              value={last_name}
              onChange={handleRegisterChange}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={handleRegisterChange}
            ></input>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleRegisterChange}
            ></input>
            <br />
            <br />
            <button id="registration_btn" type="submit">
              Register
            </button>
          </form>
        </div>
        <div id="signin_size">
          <p>
            Already registered? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
