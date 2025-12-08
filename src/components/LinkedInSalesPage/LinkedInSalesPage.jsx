import React, { useState } from 'react';
import { FaDatabase, FaSync, FaFileExport, FaRobot, FaEnvelope, FaPhone, FaCheckCircle, FaCheck } from 'react-icons/fa';
import { MdClose, MdInfo } from 'react-icons/md';
import { BsLightningChargeFill } from 'react-icons/bs';
import "./LinkedInSalesPage.css"
import img1 from "../../assets/Avatar Users@2x.png"
import img2 from "../../assets/Frame 1171278339.png"
import stepImg from "../../assets/CRM-Data-Enrichment-1536x948.webp"
import logo from "../../assets/Group 1171274963.png"


const LinkedInSalesPage = () => {
  const [activeTab, setActiveTab] = useState('enrichment');

  const renderEnrichmentTab = () => (
    <div className="content-wrapper">
      <div className="card-header">
        <h2 className="card-main-title">Here is how LeadCRM tackles that situation.</h2>
        <a href="#" className="card-cta">Try LeadCRM Data Enrichment</a>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <div className="section-title">
            <FaEnvelope className="section-icon email" />
            Verified Email & Phone
          </div>
          
          <div className="profile-section">
            <div className="profile-header">
              <div className="profile-img-wrapper">
                <img src={img1} alt="David Steinhoff" className="profile-img" />
                <div className="linkedin-badge">in</div>
              </div>
              <div className="badge-group">
               
                <div className="platform-badges">
                  <div className="platform-icon zoominfo">
                    <div className="valid-label">
                      <span className="valid-check">✓</span>
                      Valid
                    </div>
                    ZI
                  </div>
                  <div className="platform-icon zb">
                    <div className="valid-label">
                      <span className="valid-check">✓</span>
                      Valid
                    </div>
                    zb
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="profile-name">David Steinhoff</h3>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-details">
                  <div className="contact-value">
                    davidsteinhoff@gmail.com
                    <FaCheck className="verified-check" />
                  </div>
                  <div className="found-via">
                    Found via snov.io <MdInfo className="info-icon" />
                  </div>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-details">
                  <div className="contact-value">
                    +1 932 xxx xxx
                    <FaCheck className="verified-check" />
                  </div>
                  <div className="found-via">
                    Found via snov.io <MdInfo className="info-icon" />
                  </div>
                </div>
              </div>
            </div>
            
            <button className="contacts-found-btn">
              <BsLightningChargeFill className="lightning-icon" />
              Contacts Found
            </button>
          </div>
        </div>

        <div className="content-card">
        <img src={img2} alt='card image' className=''/>
          
        </div>
      </div>
    </div>
  );

  const renderExportTab = () => (
    <div className="content-wrapper">
      <div className="">
        <div className="waterfall-header">
          <h2 className="card-main-title">If it does not works for you ! try our <span style={{color: '#27ae60'}}>Advanced Waterfall Enrichment</span></h2>
        </div>

        <div className="waterfall-card">
          <div className="waterfall-content">
          <img src={stepImg} alt="steps image " className="steps-img" />
           
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="sales-container">
    <img src={logo} alt='logo' className='side-logo'/>
      <div className="header-section">
        <h1 className="main-title">Complete LinkedIn Sales Solutions</h1>
        <p className="subtitle">Everything you need for professional LinkedIn prospecting</p>
      </div>

      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'enrichment' ? 'active' : ''}`}
          onClick={() => setActiveTab('enrichment')}
        >
          <FaDatabase className="tab-icon" />
          CRM Data Enrichment
        </button>
        <button 
          className={`tab-button ${activeTab === 'sync' ? 'active' : ''}`}
          onClick={() => setActiveTab('sync')}
        >
          <FaSync className="tab-icon" />
          CRM Data Sync
        </button>
        <button 
          className={`tab-button ${activeTab === 'export' ? 'active' : ''}`}
          onClick={() => setActiveTab('export')}
        >
          <FaFileExport className="tab-icon" />
          Bulk Export & Enrichment
        </button>
        <button 
          className={`tab-button ${activeTab === 'productivity' ? 'active' : ''}`}
          onClick={() => setActiveTab('productivity')}
        >
          <FaRobot className="tab-icon" />
          AI Productivity
        </button>
      </div>

      {activeTab === 'enrichment' && (
        <>
        <p className="problem-statement">
            It's hard to find the accurate contact data for every prospects by
            <span className="incomplete-tag">Incomplete Data</span>
          </p>
        <div className='enri-main'>
        <div>
        
          {renderEnrichmentTab()}
        </div>
        <div>
        {renderExportTab()}
        </div>
          
        </div>
          
        </>
      )}

      {activeTab === 'export' && renderExportTab()}
    </div>
  );
};

export default LinkedInSalesPage;