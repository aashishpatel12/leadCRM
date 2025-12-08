

import React from 'react';
import './LeadCrm.css';
import crmImage from "../../assets/leadcrm-supported-1536x636.png";
import AppButton from '../AppButton/AppButton';
import { FaArrowRight } from "react-icons/fa6";
import img from "../../assets/banner-thumb-7 1.png"
import img1 from "../../assets/Collaboration.png"

const LeadCRM = () => {
  return (
    <section className="leadcrm-section">
    <img className='msg-log' src={img} alt='logo'/>
      <div className="leadcrm-container">
        <div className="leadcrm-header">
          <h1>Our Supported LeadCRM</h1>
          <p>
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. 
            We don’t want you to miss any revenue opportunity on the internet!
          </p>
        </div>

        
        <div className="leadcrm-image-wrapper">
          <img 
            src={crmImage} 
            alt="LeadCRM Integrations with HubSpot, Pipedrive, Salesforce, Zoho" 
            className="leadcrm-image"
          />
        </div>

       
        <AppButton text="Let's Integrate your CRM Now!" icon={<FaArrowRight />}/>
      </div>
      <img src={img1} alt='logo' className='coloboratoion-logo'/>
    </section>
  );
};

export default LeadCRM;