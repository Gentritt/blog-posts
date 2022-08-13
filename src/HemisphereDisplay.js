import React from "react";
import nothernPic from "./image/nothern.jpg";
import southernPic from "./image/southern.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  North: {
    text: "it is nothern hemisphere",
    picture: nothernPic,
  },
  South: {
    text: "it is southern hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "North" : "South";

  const { text, picture } = hemisphereConfig[hemisphere];
  console.log({ picture });
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
