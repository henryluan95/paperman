import "./ToggleButton.scss";

const ToggleButton = ({ handleMode, isModeOn }) => {
  return (
    <div
      className="toggle"
      onClick={() => {
        handleMode();
      }}
    >
      <div
        className={`toggle__button ${
          isModeOn ? "toggle__button--active" : ""
        } `}
      ></div>
    </div>
  );
};

export default ToggleButton;
