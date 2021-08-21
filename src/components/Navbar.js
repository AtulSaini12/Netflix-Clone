import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-image"
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.brand.microsites.netflix.io%2Fassets%2F493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png%3Fv%3D30&imgrefurl=https%3A%2F%2Fbrand.netflix.com%2Fen%2Fassets%2F&tbnid=Jcb8EromgfzjDM&vet=12ahUKEwij36DwhcPyAhVCiNgFHR95CYYQMygAegUIARCvAQ..i&docid=hu5P0LmCR3w2wM&w=1440&h=817&q=netflix%20black%20bg%20logo&ved=2ahUKEwij36DwhcPyAhVCiNgFHR95CYYQMygAegUIARCvAQ"
        alt="netflix-logo"
      />

      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </div>
  );
};

export default Navbar;
