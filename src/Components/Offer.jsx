import React from "react";
import { NavLink } from "react-router-dom";

function Offer() {
  return (
    <div id="presentaion">
      <div className="pr-heading">
        <h1>
          HERE IS A<span> OFFER</span> FOR YOU
        </h1>
        <p className="details font-extrabold ">
          Join our gym today and take advantage of our special offer for new
          members! Enjoy a discounted membership fee, access to all facilities,
          and personalized training sessions to help you reach your fitness
          goals. Whether you're looking to lose weight, build muscle, or simply
          improve your overall health, our state-of-the-art equipment and
          experienced trainers are here to support you every step of the way.
         
        </p>
        <div className="pr-btns">
          {/* <a href="#" className="pr-btn"> */}
          <NavLink className="pr-btn" to="/pricing">
          AVAIL OFFER

          </NavLink>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default Offer;
