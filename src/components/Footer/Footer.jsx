import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make dreams
            <br />
            of people come true
          </span>
        </div>
        <div className="f-right flexColStart">
          <span className="primaryText">Avengers Headquarters</span>
          <span className="secondaryText">
            145 Earth Building,Asgard,Kingdom of Thor
          </span>
          <div className="f-menu flexCenter">
            <span>Properties</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
