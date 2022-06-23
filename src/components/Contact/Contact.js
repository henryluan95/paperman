import "./Contact.scss";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__info">
        <h2 className="contact__title">Get In Touch</h2>
        <div className="contact__address">
          <h3>Business Address</h3>
          <span>Ho Chi Minh, Viet Nam</span>
        </div>
        <div className="contact__hours">
          <h3>Business Hours</h3>
          <span>Monday: 10am-5pm</span>
          <span>Tuesday: 10am-5pm</span>
          <span>Wednesday: 10am-5pm</span>
          <span>Thursday: 10am-5pm</span>
          <span>Friday: 10am-5pm</span>
          <span>Saturday: 10am-5pm</span>
          <span>Sunday: 10am-5pm</span>
        </div>
        <ul className="contact__media">
          <li className="contact__media-item">
            <a
              className="contact__media-link"
              href="https://www.facebook.com/paperman.saigon"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </li>
          <li className="contact__media-item">
            <a
              className="contact__media-link"
              href="https://www.instagram.com/paperman_saigon/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>

      <iframe
        className="contact__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.549968646983!2d106.69725299999999!3d10.769124999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3fb4235107%3A0xcdf785756aa94d6b!2zMzcgxJDhurduZyBUaOG7iyBOaHUsIFBoxrDhu51uZyBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sca!4v1655953846121!5m2!1sen!2sca"
      ></iframe>
    </div>
  );
};

export default Contact;
