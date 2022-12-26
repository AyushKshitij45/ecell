import React from 'react';
import './HeroSection.css';
import image from "./images/Group-38.png";
import google from "./images/google.png";
import trello from "./images/Trello.png";
import monday from "./images/monday.png";
import notion from "./images/Notion.png";
import slack from "./images/Slack.png";

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={image} alt="Woman holding Laptop" />
      <h1>Increase Your Customers Loyalty and Satisfaction</h1>
      <p>We help businesses like yours earn more customers, standout from competitors, make more money </p>
      <button type='button'>Get Started</button>
      <div className='brand-grid'><div className='google'><img src={google} alt="google"/></div><div className='trello'><img src={trello} alt="trello"/></div><div className='monday'><img src={monday} alt="monday"/></div><div className='notion'><img src={notion} alt="notion"/></div><div className='slack'><img src={slack} alt="slack"/></div></div>
    </div>
  );
}

export default HeroSection;
