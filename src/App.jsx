import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FeaturesMarquee from './components/FeaturesMarquee/FeaturesMarquee';

import ComparisonSection from './components/ComparisonSection/ComparisonSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import TestimonialSection from './components/Testimonials/Testimonials';
import LinkedInSalesPage from './components/LinkedInSalesPage/LinkedInSalesPage';
import LeadCRM from './components/LeadCrm/LeadCrm';
import Footer from './components/Footer/Footer';
import LeadManagement from './components/LeadManagemant/LeadManagemat';


function App() {

  return (
    <>
      <div className="App">
      <Navbar />
      <Hero />
      <FeaturesMarquee />
      <ComparisonSection/>
      <HowItWorks/>
      <TestimonialSection/>
      <LinkedInSalesPage/>
      <LeadCRM/>
      <LeadManagement/>

      <Footer/>
     
    </div>
    </>
  )
}

export default App
