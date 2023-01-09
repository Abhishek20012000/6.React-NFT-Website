import React from "react";
import pcIcon from "../assets/PC-icon.png";
import TechCrunch from "../assets/featured-company/1.png";
import FastCompany from "../assets/featured-company/2.png";
import Mit from "../assets/featured-company/3.png";
import Forbes from "../assets/featured-company/4.png";
const PcSection = () => {
  return (
    <section>
      <div className="container pc-flex">
        <div className="pc-info">
          <h1 className="pc-title">
            Discover <br /> And Collect <br /> Rare NFTs
          </h1>
          <p className="pc-paragraph">
            The most secure marketplace for buying and selling unique crypto
            assets.
          </p>
          <div className="button-container">
            <button className="btn btn-primary">BUY NFTS</button>
            <button className="btn btn-secondary btn-border">SELL NFTS</button>
          </div>
        </div>
        <img src={pcIcon} alt="pc.png" className="pc-icon" />
      </div>
      <div className="container featured-section">
        <h3 className="featured-title">FEATURED ON</h3>
        <div className="featured-companies">
          <img src={TechCrunch} alt="" />
          <img src={FastCompany} alt="" />
          <img src={Mit} alt="" />
          <img src={Forbes} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PcSection;
