
import React from 'react';
import './HowItWorks.css';
import { FaChrome, FaLinkedin, FaCheckCircle, FaSyncAlt, FaArrowRight } from 'react-icons/fa';
import img4 from "../../assets/Group 2147224141.png"
import img3 from "../../assets/Group 1171278237 (1).png"
import img2 from "../../assets/Group 1171278236.png"
import img1 from "../../assets/Group 2147224140.png"
import AppButton from '../AppButton/AppButton';
// import ball from "../../assets/Ball.png";

const HowItWorks = () => {
  return (
    <section className="howitworks-section">
      <div className="howitworks-container">
        <h2 className="howitworks-title">How it Works</h2>
        <p className="howitworks-subtitle">
          From setup to success in 4 simple steps
        </p>

        <div className="steps-grid">
        <svg class="connecting-line" viewBox="0 0 1000 300" preserveAspectRatio="none">
    <path d="M 150 120 Q 350 180, 550 120 Q 750 60, 950 120" 
          fill="none" 
          stroke="#2D96BC" 
          stroke-width="4" 
          stroke-linecap="round"
          opacity="0.6"/>
  </svg>
          <div className="step-card glow-1">
            <div className="step-number">1</div>
            <h3>Install the Extension</h3>
            <p>
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.
            </p>
           
            <img src={img1}/>
          </div>

       
          <div className="step-card glow-2">
            <div className="step-number">2</div>
            <h3>Browse LinkedIn</h3>
            <p>
              Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.
            </p>
            
            <img src={img2}/>
          </div>

   
          <div className="step-card glow-3">
            <div className="step-number">3</div>
            <h3>Get Enriched Data</h3>
            <p>
              Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.
            </p>
            
            <img src={img3}/>
          </div>

          
          <div className="step-card glow-4">
            <div className="step-number">4</div>
            <h3>Sync to CRM Instantly</h3>
            <p>
              Prospect data syncs to your CRM instantly with history, tracking, and AI-powered insights for better follow-ups.
            </p>
            <div className="step-visual sync-flow">
             
              <img src={img4}/>
             
            </div>
          </div>
        </div>

      
        <div className="cta-center">
          
          <AppButton text="Try LeadCRM Now" icon={<FaArrowRight/>}/>
        </div>

      
      </div>
      {/* <img src={ball} className="decorative-circle"/> */}
    </section>
  );
};

export default HowItWorks;