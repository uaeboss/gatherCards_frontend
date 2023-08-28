import "./css/Registration.css";
import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { stateContext } from "../App";
import { registerUser } from "../utils/authenticationUtils";
import Loading from "./Loading";

export const Registration = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setToken,
    loadingAuthRequest,
    setLoadingAuthRequest,
  } = useContext(stateContext);

  const [{ username, first_name, last_name, email, password }, setFormState] =
    useState({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleRegisterSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!username || !first_name || !last_name || !email || !password)
        throw new Error("All fields are required!");
      setLoadingAuthRequest(true);
      const { data, error } = await registerUser({
        username,
        first_name,
        last_name,
        email,
        password,
      });
      if (error) throw error;
      setToken(data.token);
      setIsAuthenticated(true);
      setLoadingAuthRequest(false);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setLoadingAuthRequest(false);
      console.log(error.message);
    }
  };

  if (loadingAuthRequest) return <Loading />;
  if (isAuthenticated) return <Navigate to="/auth" />;

  return (
    <>
      <div id="registerform_container">
        <div id="form_size_registration">
          <form onSubmit={handleRegisterSubmit}>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            ></input>
            <br />
            <input
              id="first_name"
              type="text"
              placeholder="First name"
              value={first_name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              id="last_name"
              type="text"
              placeholder="Last name"
              value={last_name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              id="email"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            ></input>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
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
