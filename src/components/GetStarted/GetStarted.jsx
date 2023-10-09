import React from "react";
import './GetStarted.css'
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homeyz</span>
          <span className="secondaryText">
            Subscribe us and find super attractive discounts
            <br />
            Find your dream home
          </span>
          <button className="button">
            <a href="mailto:rajnikantr905@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
