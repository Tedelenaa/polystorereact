import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export const SignUpBtn = () => {
  let navigate = useNavigate();
  return (
    <Link
      to="/signup"
      className="btn sbtn me-3"
      // onClick={navigate("/dashboard", <Dashboard />)}
    >
      Sign Up
    </Link>
  );
};

export const LoginBtn = () => {
  return (
    <Link to="/login" className="btn sbtn">
      Login
    </Link>
  );
};

export const SubmitBtn = () => {
  return (
    <Link to="/" className="btn sbtn">
      Submit
    </Link>
  );
};
