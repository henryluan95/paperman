import "./CloseButton.scss";

const CloseButton = ({ handleClick }) => {
  return (
    <button className="close" onClick={() => handleClick()}>
      X
    </button>
  );
};

export default CloseButton;
