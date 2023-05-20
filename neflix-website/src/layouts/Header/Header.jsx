import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";

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
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <div className="nav_img"></div>
        <div className="nav_options">
          <span className="nav_option">TV series</span>
          <span className="nav_option">Movies</span>
          <span className="nav_option">My list</span>
        </div>
      </div>
      <div className="right">
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Header