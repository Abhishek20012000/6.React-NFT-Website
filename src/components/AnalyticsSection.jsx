import React from "react";
import AnalyticsIcon from "../assets/Analytics-icon.png";
const AnalyticsSection = () => {
  return (
    <section>
      <div className="container pc-flex Analytics-container">
        <img src={AnalyticsIcon} alt="" className="Analytics-icon" />
        <div className="Analytics-info">
          <h2 className="title Analytics-title">Analytics</h2>
          <h2 className="Analytics-subheading">
            built-in analytics to track your nfts
          </h2>
          <p className="pc-paragraph Analytics-paragraph">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <button className="btn btn-primary Analytics-btn">
            VIEW OUR PRICING
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
