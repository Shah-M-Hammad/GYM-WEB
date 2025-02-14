import React from "react";
import Featurebox from "./Featurebox";
import images1 from "../images/1.svg";
import images2 from "../images/2.svg";
import images3 from "../images/3.svg";
import images4 from "../images/4.svg";
import images5 from "../images/fitness.png";
import images6 from "../images/treadmill.png";
import images7 from "../images/yoga.png";
import images8 from "../images/leg.png";

function Feature() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox image={images1} title="EQUIPMENT"></Featurebox>
        <Featurebox image={images2} title="EQUIPMENT"></Featurebox>
        <Featurebox image={images3} title="EQUIPMENT"></Featurebox>
        <Featurebox image={images4} title="EQUIPMENT"></Featurebox>
        {/* <Featurebox image={images6} title="EQUIPMENT"></Featurebox>
        <Featurebox image={images7} title="YOGA CLASSES"></Featurebox>
        <Featurebox image={images8} title="EQUIPMENT"></Featurebox>
        <Featurebox image={images5} title="EQUIPMENT"></Featurebox> */}
      </div>
    </div>
  );
}

export default Feature;
