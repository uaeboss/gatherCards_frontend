import "./css/LoginForm.css";
import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { stateContext } from "../App";
import Loading from "./Loading";
import { loginUser } from "../utils/authenticationUtils";

const LoginForm = () => {
  const { isAuthenticated, setToken, setIsAuthenticated, loadingAuthRequest, setLoadingAuthRequest } = useContext(stateContext)

  const [{ email, password }, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) throw new Error("All fields are required!");
      setLoadingAuthRequest(true);
      const { data, error } = await loginUser({ email, password });
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
      <div id="loginform_container">
        <div id="form_size_login">
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              placeholder="Your email ..."
              value={email}
              onChange={handleChange}
            ></input>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Your password ..."
              value={password}
              onChange={handleChange}
            ></input>
            <br />
            <button id="login_btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div id="signup_size">
          <p>
            Don’t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
