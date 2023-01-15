import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <nav>
        <div>
        <h1>
          Tony Stark
        </h1>
          <img
            src="https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg"
           
          />
      </div>
        <main>
          <Link className="link" to={"/"}>Home</Link>
          <HashLink className="link" to={"/#about"}>About</HashLink>
          <HashLink className="link" to={"/#brands"}>Brands</HashLink>
          <Link className="link" to={"/services"}>Services</Link>
          <Link className="link" to={"/contact"}>Contact</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
