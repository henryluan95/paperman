import "./Accessibility.scss";
import { useEffect, useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import backgroundImage from "../../assets/images/Polygon.svg";
import CloseButton from "../CloseButton/CloseButton";

const Accessibility = ({
  isAccessibilityClicked,
  setIsAccessibilityClicked,
  setIsADHDModeOn,
  isADHDModeOn,
}) => {
  const [isSeizureModeOn, setIsSeizureModeOn] = useState(false);
  const [isVisionImpairedModeOn, setIsVisionImpairedModeOn] = useState(false);
  const [isCognitiveModeOn, setIsCognitiveModeOn] = useState(false);

  //   Create a function to handle seizure mode
  const handleSeizureMode = () => {
    setIsSeizureModeOn(!isSeizureModeOn);
  };

  const handleVisionImpairedMode = () => {
    setIsVisionImpairedModeOn(!isVisionImpairedModeOn);
  };

  const handleCognitiveMode = () => {
    setIsCognitiveModeOn(!isCognitiveModeOn);
  };

  const handleADHDMode = () => {
    setIsADHDModeOn(!isADHDModeOn);
    setIsVisionImpairedModeOn(false);
    setIsCognitiveModeOn(false);
    setIsSeizureModeOn(false);
  };

  useEffect(() => {
    if (isSeizureModeOn) {
      setIsVisionImpairedModeOn(false);
      setIsCognitiveModeOn(false);
      setIsADHDModeOn(false);
      document.documentElement.className = "desaturation";
      document.documentElement.classList.remove("saturation");
    } else {
      document.documentElement.classList.remove("desaturation");
    }
  }, [isSeizureModeOn]);

  useEffect(() => {
    if (isVisionImpairedModeOn) {
      setIsSeizureModeOn(false);
      setIsCognitiveModeOn(false);
      setIsADHDModeOn(false);
      document.documentElement.className = "saturation";
    } else {
      document.documentElement.classList.remove("saturation");
    }
  }, [isVisionImpairedModeOn]);

  useEffect(() => {
    const pTags = document.querySelectorAll("p");
    const h1Tags = document.querySelectorAll("h1");
    const h2Tags = document.querySelectorAll("h2");
    const h3Tags = document.querySelectorAll("h3");
    const h4Tags = document.querySelectorAll("h4");
    const spanTags = document.querySelectorAll("span");

    if (isCognitiveModeOn) {
      setIsSeizureModeOn(false);
      setIsVisionImpairedModeOn(false);
      setIsADHDModeOn(false);
      pTags.forEach((tag) => tag.classList.add("text-border"));
      h1Tags.forEach((tag) => tag.classList.add("text-border"));
      h2Tags.forEach((tag) => tag.classList.add("text-border"));
      h3Tags.forEach((tag) => tag.classList.add("text-border"));
      h4Tags.forEach((tag) => tag.classList.add("text-border"));
      spanTags.forEach((tag) => tag.classList.add("text-border"));
    } else {
      pTags.forEach((tag) => tag.classList.remove("text-border"));
      h1Tags.forEach((tag) => tag.classList.remove("text-border"));
      h2Tags.forEach((tag) => tag.classList.remove("text-border"));
      h3Tags.forEach((tag) => tag.classList.remove("text-border"));
      h4Tags.forEach((tag) => tag.classList.remove("text-border"));
      spanTags.forEach((tag) => tag.classList.remove("text-border"));
    }
  }, [isCognitiveModeOn]);

  return (
    <div className={`acces ${isAccessibilityClicked ? "acces--active" : ""}`}>
      <img
        className="acces__background"
        src={backgroundImage}
        alt="background "
      />
      <CloseButton handleClick={setIsAccessibilityClicked} />
      <div className="acces__card">
        <h2 className="acces__title">Accessibility Adjustments</h2>
        <div className="acces__mode mode">
          <ToggleButton
            className="button mode__button"
            handleMode={handleSeizureMode}
            isModeOn={isSeizureModeOn}
          />
          <div className="mode__info">
            <span className="mode__title">Seizure Safe Mode</span>
            <span className="mode__desc">Reduces Color</span>
            {isSeizureModeOn && (
              <p className="mode__detail">
                This mode allows seizure prone users to browse the website
                safely by eliminating risky colour combinations.
              </p>
            )}
          </div>
        </div>
        <div className="acces__mode mode">
          <ToggleButton
            className="button mode__button"
            handleMode={handleVisionImpairedMode}
            isModeOn={isVisionImpairedModeOn}
          />
          <div className="mode__info ">
            <span className="mode__title">Vision Impaired Mode</span>
            <span className="mode__desc">Enhances Visuals</span>
            {isVisionImpairedModeOn && (
              <p className="mode__detail">
                This mode enhances the visual of the website so that it can
                provide better user experience for those with Degrading
                Eyesight, Tunnel Vision, Cataract and others.
              </p>
            )}
          </div>
        </div>
        <div className="acces__mode mode">
          <ToggleButton
            className="button mode__button"
            handleMode={handleCognitiveMode}
            isModeOn={isCognitiveModeOn}
          />
          <div className="mode__info">
            <span className="mode__title">Cognitive Disability Mode</span>
            <span className="mode__desc">
              Assists Reading and Reduces Text Float
            </span>
            {isCognitiveModeOn && (
              <p className="mode__detail">
                This mode assists the readability of the website to support
                users with cognitive disabilities such as Autism, Dyslexia and
                others.
              </p>
            )}
          </div>
        </div>
        <div className="acces__mode mode">
          <ToggleButton
            className="button mode__button"
            handleMode={handleADHDMode}
            isModeOn={isADHDModeOn}
          />
          <div className="mode__info">
            <span className="mode__title">ADHD Assisted Mode</span>
            <span className="mode__desc">
              Increases Focus and Reduces Distractions
            </span>
            {isADHDModeOn && (
              <p className="mode__detail">
                This mode draws users' attention to the essential elements of
                the web page. This feature enhances focus and significantly
                reduces distractions.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
