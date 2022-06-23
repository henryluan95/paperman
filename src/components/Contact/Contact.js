import "./Contact";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="business-address">
            <h3>Business Address</h3>
            <span>Ho Chi Minh, Viet Nam</span>
          </div>
          <div className="business-hours">
            <h3>Business Hours</h3>
            <span>Monday: 10am-5pm</span>
            <span>Tuesday: 10am-5pm</span>
            <span>Wednesday: 10am-5pm</span>
            <span>Thursday: 10am-5pm</span>
            <span>Friday: 10am-5pm</span>
            <span>Saturday: 10am-5pm</span>
            <span>Sunday: 10am-5pm</span>
          </div>
          <ul className="social-media">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div id="map">
          <span>There is a map here</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
