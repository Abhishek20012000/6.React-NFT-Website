import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-flex">
        <div className="f-1">
          <h2 className="footer-title">KRYPTO</h2>
        </div>
        <div className="f-2">
          <h2 className="list-items-title">Krypto</h2>
          <ul className="footer-list-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Buy NFTs</a>
            </li>
            <li>
              <a href="#">Sell NFTs</a>
            </li>
          </ul>
        </div>
        <div className="f-3">
          <h2 className="list-items-title">Market</h2>
          <ul className="footer-list-items">
            <li>
              <a href="#">Browse NFTs</a>
            </li>
            <li>
              <a href="#">Buy NFTs</a>
            </li>
            <li>
              <a href="#">Sell NFTs</a>
            </li>
          </ul>
        </div>
        <div className="f-4">
          <h2 className="list-items-title">Contact</h2>
          <ul className="footer-list-items">
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">LinkdIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="f-5">
          <h2 className="footer-title">Join Our Newsletter</h2>
          <div className="btn-container">
            <input type="text" placeholder="Email Address" />
            <button className="footer-btn">SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
