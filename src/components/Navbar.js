import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='Netflix Logo'
      />
    </div>
  );
}

export default Navbar;
