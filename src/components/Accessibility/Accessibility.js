import "./Accessibility.scss";

import React, { useEffect, useState } from "react";

const Accessibility = ({
  isAccessibilityClicked,
  setIsAccessibilityClicked,
}) => {
  const [isSeizureModeOn, setIsSeizureModeOn] = useState(false);
  const [isVisionImpairedModeOn, setIsVisionImpairedModeOn] = useState(false);

  //   Create a function to handle seizure mode
  const handleSeizureMode = () => {
    setIsSeizureModeOn(!isSeizureModeOn);
    // await setIsVisionImpairedModeOn(false);
    // if (isSeizureModeOn) {
    //   document.documentElement.className = "desaturation";
    // } else {
    //   document.documentElement.classList.remove("desaturation");
    // }
    // setIsAccessibilityClicked(!isAccessibilityClicked);
  };

  const handleVisionImpairedMode = () => {
    setIsVisionImpairedModeOn(!isVisionImpairedModeOn);
    // setIsSeizureModeOn(false);
    // if (isVisionImpairedModeOn) {
    //   document.documentElement.className = "saturation";
    // } else {
    //   document.documentElement.classList.remove("saturation");
    // }
    // setIsAccessibilityClicked(!isAccessibilityClicked);
  };

  useEffect(() => {
    if (isSeizureModeOn) {
      setIsVisionImpairedModeOn(false);
      document.documentElement.className = "desaturation";
    } else {
      document.documentElement.classList.remove("desaturation");
    }
  }, [isSeizureModeOn]);

  useEffect(() => {
    if (isVisionImpairedModeOn) {
      setIsSeizureModeOn(false);
      document.documentElement.className = "saturation";
    } else {
      document.documentElement.classList.remove("saturation");
    }
  }, [isVisionImpairedModeOn]);

  return (
    <div className={`acces ${isAccessibilityClicked ? "acces--active" : ""}`}>
      <div className="acces__card">
        <h2 className="acces__title">Accessibility Adjustments</h2>
        <div className="acces__mode mode">
          <button className="button mode__button" onClick={handleSeizureMode}>
            Off
          </button>
          <div className="mode__info">
            <span className="mode__title">Seizure Safe Mode</span>
            <span className="mode__desc">Reduces Color</span>
          </div>
        </div>
        <div className="acces__mode mode">
          <button
            className="button mode__button"
            onClick={handleVisionImpairedMode}
          >
            Off
          </button>
          <div className="mode__info ">
            <span className="mode__title">Vision Impaired Mode</span>
            <span className="mode__desc">Enhances visuals</span>
          </div>
        </div>
        <div className="acces__mode mode">
          <button className="button mode__button">Off</button>
          <div className="mode__info">
            <span className="mode__title">Cognitive Disability Mode</span>
            <span className="mode__desc">
              Assists reading and reduces text float
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
