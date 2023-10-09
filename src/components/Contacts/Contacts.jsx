import React from "react";
import "./Contacts.css";
import { MdCall, MdChat } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Simply choose your method </span>
          <span className="secondaryText">
            We are always ready to help you by providing the best services!
            <br />
            We believe a good place to live can lead to a happy life
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0u402u40u84</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdChat size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">0u402u40u84</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              {/* third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">0u402u40u84</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0u402u40u84</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;