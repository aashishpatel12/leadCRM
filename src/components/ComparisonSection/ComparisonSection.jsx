
import React from 'react';
import './ComparisonSection.css';
import { 
  FaTimesCircle, FaCheckCircle, FaSyncAlt, FaDatabase, 
  FaUserTie, FaRobot, FaClock 
} from 'react-icons/fa';
import frame1 from "../../assets/Frame 1171278228.png"
import frame2 from "../../assets/Frame 1171278223.png"
import AppButton from '../AppButton/AppButton';
import saveImg from "../../assets/Group 2147224137.png"

const ComparisonSection = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <h2 className="comparison-title">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        <div className="comparison-grid">
         
          <div className="col without">
            <div className="mockup-left">
              <img src={frame2} alt="Sales Navigator Mockup" className="mockup-img" />
             
            </div>

            <h3>Without LeadCRM</h3>

            <ul className="pain-points">
              <li>
                <FaTimesCircle className="icon red" />
                <div>
                  <strong>Manual Data Entry</strong>
                  <span className="tag red">3+ hours wasted daily</span>
                  <p>Copying LinkedIn contacts to CRM manually plus losing conversation history</p>
                </div>
              </li>
              <li>
                <FaTimesCircle className="icon red" />
                <div>
                  <strong>Incomplete Data</strong>
                  <span className="tag orange">60% Data Incomplete</span>
                  <p>LinkedIn profiles missing Email and Phones from 700M+ Database</p>
                </div>
              </li>
              <li>
                <FaTimesCircle className="icon red" />
                <div>
                  <strong>No CRM Visibility</strong>
                  <span className="tag purple">Zero context available</span>
                  <p>Can’t see existing CRM contacts when browsing LinkedIn profiles</p>
                </div>
              </li>
              <li>
                <FaTimesCircle className="icon red" />
                <div>
                  <strong>Limited Productivity</strong>
                  <span className="tag pink">No smart assistance</span>
                  <p>Writing messages manually plus no AI assistant for reply, invite or comments.</p>
                </div>
              </li>
            </ul>
          </div>

        
          <div className="vs-divider">VS</div>

         
          <div className="col with">
            <div className="mockup-right">
              <img src={frame1} alt="CRM Sync Mockup" className="mockup-img" />
              
            </div>

            <h3>With LeadCRM <span className="saved-time">4+ hours/day Saved</span></h3>

            <ul className="benefits">
              <li>
                <FaSyncAlt className="icon green" />
                <div>
                  <strong>Complete Bi-Directional Sync</strong>
                  <p>Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>
                </div>
              </li>
              <li>
                <FaDatabase className="icon blue" />
                <div>
                  <strong>700M+ Contacts + Enrichment</strong>
                  <p>Get verified emails and phone numbers from a vast global database.</p>
                </div>
              </li>
              <li>
                <FaUserTie className="icon purple" />
                <div>
                  <strong>CRM Overlay on LinkedIn</strong>
                  <p>See full CRM insights directly on LinkedIn profiles without switching tabs.</p>
                </div>
              </li>
              <li>
                <FaRobot className="icon teal" />
                <div>
                  <strong>AI Response + Templates + Bulk Exports</strong>
                  <p>Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="bottom-cta">
          <AppButton text=" Start Using LeadCRM Now"/>
          <img src={saveImg} className='save-hour'/>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;