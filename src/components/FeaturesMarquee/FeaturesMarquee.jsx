
import React from 'react';
import './FeaturesMarquee.css';
import icon1 from "../../assets/Adobe Express - file (37) 1.png"
import icon2 from "../../assets/cursor-pointer-icon-479x512-ek32btk3 1.png"
import icon3 from "../../assets/H38cH38Bm0014IconSet004 1.png"
import icon4 from "../../assets/H38cH38Bm0014IconSet004 1.png"

const FeaturesMarquee = () => {
  return (
    <section className="marquee-section">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="marquee-item">
                <img src={icon1} alt='icom'/>
                <span className="text">Access to 700M+ Contacts</span>
              </div>
              <div className="marquee-item">
              <img src={icon2} alt='icom'/>
                <span className="text">One-click push to CRM</span>
              </div>
              <div className="marquee-item">
              <img src={icon3} alt='icom'/>
                <span className="text">Custom Field Mapping</span>
              </div>
              <div className="marquee-item">
              <img src={icon4} alt='icom'/>
                <span className="text">Advanced Waterfall Enrichment</span>
              </div>
              
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesMarquee;