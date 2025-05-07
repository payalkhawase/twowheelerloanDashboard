import React, { useState } from 'react'

function AboutUs() {

  const [activeTab,setActiveTab]=useState('who')

  const tabContent={
    'who':(
      <div className='text-center'>
        <h3>Who We Are</h3>
        <p>Shriram Group has a 50-year legacy of transforming lives through financial empowerment,
        offering vehicle loans, gold loans, and more to millions across India.
        Shriram is a pioneer in the NBFC Industry with a strong rural presence. 
        The Shriram Finance Limited is one of the India’s leading NBFCs, with 9.44 Million (as on Dec 31, 2024) private and corporate customers across India. 
        Shriram’s customers benefit from a broad range of diverse product portfolio: Fixed Deposits, Fixed Investment Plan, Commercial Vehicle Loans, 
        Passenger Vehicle Loans, Construction Equipment Loans, Farm Equipment Loans, Two-Wheeler Loans, Gold Loans, MSME Finance and Personal Loans.</p>
      </div>
    ),
    
    'leadership':(
      <div className='text-center'>
        <h3>Our Leadership</h3>
        <p> Our experienced leadership team is committed to driving inclusive growth and innovation in
        financial services.
        As a leading financial enterprise with a rich business history, Shriram Finance is founded on inclusion and sustainability, helping us unlock value for generations to come. 
        Our presence spans across the agrarian heartlands of rural India to its vibrant, cosmopolitan metros where we set wings to aspirations. 
        At Shriram Finance, we are committed to meeting our customers at every touchpoint of their financial journey so that they get to explore unlimited possibilities through us.</p>
      </div>
    ),

    'journey':(
      <div className='text-center'>
        <h3>The Finance Journey</h3>
        <p>From modest beginnings to managing assets worth ₹2.54 Lac Cr, our journey is a testament to
        resilience and trust.
        Shriram Finance is the country’s one of the biggest retail NBFC offering credit solutions for commercial vehicles, two-wheeler loans, car loans, home loans, gold loans, personal and small business loans. We are part of the 50 year old Shriram Group, a financial conglomerate that has emerged as a trusted partner in creating transformative experiences and lasting impressions in customers’ lives.</p>
      </div>
    )
  }

  return (
    <div>
      <img style={{width:'100%'}}src='src/assets/about-us-mobile.jpg'/>
      <div
    style={{
      position: 'absolute',
      top: '180px',
      left: '670px',
      color: 'white',
      fontSize: '35px',
    }}
  >
    About Us
  </div>
  <div  className="d-flex justify-content-center my-4">
  <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" onClick={()=>setActiveTab('who')} className={`btn ${activeTab==='who' ? 'btn-warning' :'btn-outline-warning'}`}>Who We Are</button>
      <button type="button" onClick={()=>setActiveTab('leadership')} className={`btn ${activeTab==='leadership' ? 'btn-warning' :'btn-outline-warning'}`}>Our Leadership</button>
      <button type="button" onClick={()=>setActiveTab('journey')} className={`btn ${activeTab==='journey' ? 'btn-warning' :'btn-outline-warning'}`}>The Finance Journey</button>
    </div>
    </div>

    <div className="container mb-5">{tabContent[activeTab]}</div>
  </div>
  )
}

export default AboutUs
