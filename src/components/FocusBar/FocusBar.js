import { useEffect, useRef } from "react";
import "./FocusBar.scss";

const FocusBar = () => {
  const topBar = useRef(null);
  const bottomBar = useRef(null);

  const onMouseMove = (e) => {
    topBar.current.style.left = e.clientX + "px";
    topBar.current.style.top = e.clientY - 120 + "px";
    bottomBar.current.style.left = e.clientX + "px";
    bottomBar.current.style.top = e.clientY + 120 + "px";
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return function cleanup() {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <>
      <div ref={topBar} className="focus-bar__top"></div>
      <div ref={bottomBar} className="focus-bar__bottom"></div>
    </>
  );
};

export default FocusBar;
