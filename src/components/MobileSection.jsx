import React from "react";
import MobileIcon from "../assets/Phone-icon.png";
const MobileSection = () => {
  return (
    <section>
      <div className="container pc-flex Analytics-container">
        <div className="Analytics-info">
          <h2 className="title Analytics-title">GET OUR APP</h2>
          <h2 className="Analytics-subheading">
            browse nfts from your smartphone
          </h2>
          <p className="pc-paragraph Analytics-paragraph">
            Our Krypto app is the easiest way to keep track of your assets when
            you’re on the go.
          </p>
          <button className="btn btn-primary Analytics-btn Phone-btn">
            DOWNLOAD ON IOS
          </button>
        </div>
        <img src={MobileIcon} alt="" className="Analytics-icon" />
      </div>
    </section>
  );
};

export default MobileSection;
