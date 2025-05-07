import React, { useState } from 'react'

function AboutUs() {

  const [activeTab,setActiveTab]=useState('who')

  const tabContent={
    'who':(
      <div className='text-center'>
        <h3>Who We Are</h3>
        <p>Shriram Group has a 50-year legacy of transforming lives through financial empowerment,
        offering vehicle loans, gold loans, and more to millions across India.</p>
      </div>
    ),
    
    'leadership':(
      <div className='text-center'>
        <h3>Our Leadership</h3>
        <p> Our experienced leadership team is committed to driving inclusive growth and innovation in
        financial services.</p>
      </div>
    ),

    'journey':(
      <div className='text-center'>
        <h3>The Finance Journey</h3>
        <p>From modest beginnings to managing assets worth ₹2.54 Lac Cr, our journey is a testament to
        resilience and trust.</p>
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
      <button type="button" onClick={()=>setActiveTab('leadership')} className={`btn ${activeTab==='who' ? 'btn-warning' :'btn-outline-warning'}`}>Our Leadership</button>
      <button type="button" onClick={()=>setActiveTab('journey')} className={`btn ${activeTab==='who' ? 'btn-warning' :'btn-outline-warning'}`}>The Finance Journey</button>
    </div>
    </div>

    <div className="container mb-5">{tabContent[activeTab]}</div>
  </div>
  )
}

export default AboutUs
