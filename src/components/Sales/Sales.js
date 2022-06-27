import "./Sales.scss";

import React, { useEffect, useState } from "react";

const Sales = () => {
  //Setup sales future day countdown
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const futureDate = new Date(currentYear, currentMonth, currentDay + 2, 0, 0);

  //calculate time distance
  function getRemainingTime() {
    const now = new Date().getTime();
    const distance = futureDate.getTime() - now;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = distance / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];
    return values;
  }
  const [timeRemaining, setTimeRemaining] = useState(getRemainingTime());
  const [days, hours, minutes, seconds] = timeRemaining;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeRemaining(getRemainingTime());
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <section className="sales">
      <img
        className="sales__img"
        src="https://firebasestorage.googleapis.com/v0/b/paperman-4a7c4.appspot.com/o/sales-image.jpg?alt=media&token=2c1b97e9-b802-4e94-a643-da3a687b0f9f"
        alt="sale"
      />

      <div className="sales__info">
        <h2 className="sales__title">DEAL OF THE WEEK</h2>
        <div className="line sales__line"></div>
        <p className="sales__text">Save up to 30% one week</p>
        <div className="countdown">
          <div className="countdown__box">
            <span className="countdown__timer">{days}</span>
            <span>days</span>
          </div>
          <div className="countdown__box">
            <span className="countdown__timer">{hours}</span>
            <span>hours</span>
          </div>
          <div className="countdown__box">
            <span className="countdown__timer">{minutes}</span>
            <span>mins</span>
          </div>
          <div className="countdown__box">
            <span className="countdown__timer">{seconds}</span>
            <span>secs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
