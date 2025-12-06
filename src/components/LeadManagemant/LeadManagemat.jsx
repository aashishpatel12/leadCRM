import React from "react";
import "./LeadManagement.css";
import banerimg from "../../assets/Product hunt banner image.png";
import { FaArrowRightLong } from "react-icons/fa6";
import AppButton from "../AppButton/AppButton";

export default function LeadManagement() {
  return (
    <section className="hero">

      
      <div className="hero-top-text">
        Join Thousands of Professionals Using LeadCRM
      </div>

      
      <div className="hero-box">
        <img src={banerimg} alt="banner" className="banner-img"/>
      
      </div>
      <div className="cta-container">
     
      <AppButton text="Get Started Today" icon={<FaArrowRightLong />} className="cta-btn"/>
      </div>
    </section>
  );
}
