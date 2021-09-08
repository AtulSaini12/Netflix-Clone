import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      console.log("scrool > 100");
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  return (
    <div className={`${show ? "nav nav-black" : "nav"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav-image"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix-logo"
      />
      <img
        onClick={() => history.push("/profile")}
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="nav-avatar"
      />
    </div>
  );
};

export default Navbar;
