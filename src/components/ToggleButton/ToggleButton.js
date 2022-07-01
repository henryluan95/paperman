import { useState } from "react";
import "./ToggleButton.scss";

const ToggleButton = ({ handleMode }) => {
  const [isClicked, setIsClicked] = useState(false);

  //Create a function to toggle button
  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="toggle"
      onClick={() => {
        handleMode();
        handleToggle();
      }}
    >
      <div
        className={`toggle__button ${
          isClicked ? "toggle__button--active" : ""
        } `}
      ></div>
    </div>
  );
};

export default ToggleButton;
