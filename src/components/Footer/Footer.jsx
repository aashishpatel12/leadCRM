import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdHelp } from 'react-icons/md';
import { FaChrome } from 'react-icons/fa';
import './Footer.css';
import logo from "../../assets/Leadcrm Logo.png"

const Footer = () => {
  const footerData = {
    integrations: [
      { name: 'HubSpot', link: '#' },
      { name: 'Salesforce', link: '#' },
      { name: 'Pipedrive', link: '#' },
      { name: 'Close.io', badge: 'Coming Soon', link: '#' },
      { name: 'Insightly', badge: 'Coming Soon', link: '#' }
    ],
    alternative: [
      { name: 'Surfe VS LeadCRM', link: '#' },
      { name: 'Linkmatch Alternative', link: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', link: '#' },
      { name: 'Terms of Use', link: '#' }
    ],
    contact: [
      { icon: <MdEmail />, text: 'support@leadcrm.io', link: 'mailto:support@leadcrm.io' },
      { icon: <MdPhone />, text: '+1 231-538-7466', link: 'tel:+12315387466' },
      { icon: <MdHelp />, text: 'Help Center', link: '#' }
    ],
    socialMedia: [
      { name: 'Facebook', icon: <FaFacebookF />, link: '#', color: '#1877f2' },
      { name: 'Twitter', icon: <FaTwitter />, link: '#', color: '#1da1f2' },
      { name: 'LinkedIn', icon: <FaLinkedinIn />, link: '#', color: '#0077b5' },
      { name: 'Instagram', icon: <FaInstagram />, link: '#', color: '#e4405f' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="">
              <img src={logo} alt='logo'/>
            </div>
            
          </div>
          <p className="brand-description">
            LeadCRM is LinkedIn integration tool for your CRM.
          </p>
          <div className="social-links">
            {footerData.socialMedia.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="social-icon"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Integrations</h3>
            <ul className="footer-list">
              {footerData.integrations.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="footer-link">
                    {item.name}
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Alternative</h3>
            <ul className="footer-list">
              {footerData.alternative.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="footer-link">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-list">
              {footerData.legal.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="footer-link">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list contact-list">
              {footerData.contact.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="footer-link contact-link">
                    <span className="contact-icon">{item.icon}</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="chrome-button">
              
              <div>
                <div className="chrome-text-small">Available in</div>
                <div className="chrome-text-large">Chrome</div>
              </div>
              <FaChrome size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
        </p>
        <p className="copyright">
          Copyright © 2025 LeadCRM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;