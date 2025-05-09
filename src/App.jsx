import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Customer from './template/Customer'
import Header from './template/Header.jsx'
import Home from './template/Home.jsx'
import AboutUs from './template/AboutUs.jsx'
import ContactUs from './template/ContactUs.jsx'
import EmiCheck from './template/EmiCheck.jsx'
import Enquiry from './template/Enquiry.jsx'
import Login from './template/Login.jsx'
import Dashboard from './template/Dashboard.jsx'
import EnquiryPending from './enquiry/EnquiryPending.jsx'
import EnquiryApproved from './enquiry/EnquiryApproved.jsx'
import EnquiryRejected from './enquiry/EnquiryRejected.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div className="container-fluid p-0">
        {/* Header Section */}
        <div className="row">
          <div className="col-12 bg-primary text-white py-3 px-4 shadow">
            <Header />
          
          </div>
        </div>
      <Routes>
             <Route path="/home" element={<Home/>} />
              &nbsp;
              <Route path="/aboutus" element={<AboutUs />} />
              &nbsp;
              <Route path="/contactus" element={<ContactUs/>} />
              &nbsp;
              <Route path="/emicheck" element={<EmiCheck />} />
              &nbsp;
              <Route path="/enquiry" element={<Enquiry />} />
              &nbsp;
              <Route path="/login" element={<Login/>} />

              &nbsp;
              {/* //<Route path="/customer" element={<Customer/>} /> */}

              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/enquiry/enquiryPending" element={<EnquiryPending/>} />
              <Route path="/enquiry/enquiryApproved" element={<EnquiryApproved/>} />
              <Route path="/enquiry/enquiryRejected" element={<EnquiryRejected/>} />

      </Routes>
      </div>
      {/* <Dashboard></Dashboard> */}

      </BrowserRouter>
    </>
  )
}

export default App
