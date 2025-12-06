

import React from 'react';
import './Hero.css';
import logo1 from "../../assets/Group 1171278189.png"
import logo2 from "../../assets/Group 1171278188.png"
import logo3 from "../../assets/Salesforce Integration.png"
import crome from "../../assets/Group 1000004893.png"
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-banner">
        <span className="banner-text">🚀 Thousands of Professionals using LeadCRM</span>
      </div>
      <h1 className="hero-headline">
        LinkedIn CRM Integration<br />
        Capture, Sync and Enrich in <span>Both Ways</span>
      </h1>
      <p className="hero-subtext">
        Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on<br />
        LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
      </p>
      <div className="hero-integrations">
        <span>Works with</span>
        <img src={logo2} alt="HubSpot" className="integration-logo" />
        <img src={logo1} alt="Pipedrive" className="integration-logo" />
        <img src={logo3} alt="Salesforce" className="integration-logo" />
      </div>
      <div className="hero-ratings">
        <div className="rating-item">
          <span> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> 5/5</span>
        </div>
        <div className="rating-item">
          <span> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> 5/5</span>
        </div>
      </div>
      <div className="hero-footer">
        <div className='crome-store'> 
            <div className='crome-sub'>
            <p>Available in </p>
            <p>Chrome Web Store</p>
            </div>
            <img src={crome} alt='crome'/>
        </div>
        <button id="free-trial-btn" className="trial-btn">
          Get a Free Trial!
        </button>
      </div>
    </section>
  );
};

export default Hero;