import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";
import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
             initial={{y:"2rem" ,opacity:0}}
             animate={{y:0,opacity:1}}
             transition={{
              duration:2,
              type:"spring"
             }}
             >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suits your type</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className=" flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={7500} end={10000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Properties Listed</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={4990} end={5007} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers!!</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={450} />
                <span>+</span>
              </span>
              <span className="secondaryText">Locations</span>
            </div>
          </div>
        </div>
        <div className=" flexCenter hero right">
          <motion.div 
          initial={{x:"7rem" ,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
           duration:2,
           type:"spring"
          }}
          
          className="image-container">
            <img src="./hero-image.png" alt="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
