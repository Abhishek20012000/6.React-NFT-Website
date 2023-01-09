import React from "react";
import Profile from "../assets/Profile-icon.png";
const TestimonialSection = () => {
  return (
    <section>
      <div className="container Testimonial-container">
        <h2 className="title Testimonial-title">TESTIMONIALS</h2>
        <h2 className="Analytics-subheading Testimonial-subheading">
          read what others have to say
        </h2>
        <div className="cards-container">
          <div className="card">
            <div className="profile-container">
              <img src={Profile} alt="Profile.png" className="Profile-img" />
            </div>
            <h2 className="title uppercase profile-title">olivia cole</h2>
            <p className="card-paragraph uppercase">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
          <div className="card">
            <div className="profile-container">
              <img src={Profile} alt="Profile.png" className="Profile-img" />
            </div>
            <h2 className="title uppercase profile-title">olivia cole</h2>
            <p className="card-paragraph uppercase">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
          <div className="card">
            <div className="profile-container">
              <img src={Profile} alt="Profile.png" className="Profile-img" />
            </div>
            <h2 className="title uppercase profile-title">olivia cole</h2>
            <p className="card-paragraph uppercase">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
