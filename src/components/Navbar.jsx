import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="container container-flex">
        <h1 className="site-title">KRYPTO.</h1>
        <nav className={isOpen ? "active" : ""}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#"></a>Buy Nfts
          </li>
        </nav>
        <div className="Hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
