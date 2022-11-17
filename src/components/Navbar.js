import { Link } from "react-router-dom";
import poly_logo from "../images/polystore_logo.svg";
import { LoginBtn, SignUpBtn } from "./Buttons";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img src={poly_logo} alt="logo" width="70" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="products"
                className="nav-link active"
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-link active"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex-sm-column">
            <SignUpBtn />
            <LoginBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};
