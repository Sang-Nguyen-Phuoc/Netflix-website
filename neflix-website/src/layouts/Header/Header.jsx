import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className="left">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </Link>
        <div className="nav_img"></div>
        <div className={`nav_options ${show && "nav_options_black"}`}>
          <span className="nav_option">TV series</span>
          <span className="nav_option">Movies</span>
          <span className="nav_option">My list</span>
        </div>
      </div>
      <div className="right">
        <div class="dropdown">
          <button class="dropbtn">
            <img
              className="nav__avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Avatar" />
          </button>
          <div class="dropdown-content">
            <Link to="/profile" style={{ textDecoration: 'none' }}> <div className="dropdown-content-item">Profile</div> </Link>
            <div className="dropdown-content-item">Log out</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header