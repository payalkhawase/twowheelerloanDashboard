import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './template/AboutUs'
import EmiCheck from './template/EmiCheck'
import Enquiry from './template/Enquiry'
import Login from './template/Login'
import Dashboard from './template/Dashboard';
//import Customer from './template/Customer'
import Header from './template/Header.jsx'
import Home from './template/Home.jsx'
import ContactUs from './template/ContactUs.jsx'
import EnquiryPending from './enquiry/EnquiryPending.jsx'
import EnquiryApproved from './enquiry/EnquiryApproved.jsx'
import EnquiryRejected from './enquiry/EnquiryRejected.jsx'
import ForwardOe from './oe/ForwardOe.jsx'

// import CustomerVerified from './oe/CustomerVerified.jsx'
import SubmittedCustomer from './oe/SubmittedCustomer.jsx'
import VerifyDetails from './oe/VerifyDetails.jsx'
import CustomerVerified from './CM/CustomerVerified.jsx'
import LoanSanction from './CM/LoanSanction.jsx'


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


              &nbsp;
              {/* //<Route path="/customer" element={<Customer/>} /> */}

              <Route path="/dashboard" element={<Dashboard/>} />
              
              <Route path="/enquiry/enquiryPending" element={<EnquiryPending/>} />
              <Route path="/enquiry/enquiryApproved" element={<EnquiryApproved/>} />
              <Route path="/enquiry/enquiryRejected" element={<EnquiryRejected/>} />

              <Route path="/oe/forwordoe" element={<ForwardOe/>} />
              <Route path="/oe/submittedlist" element={<SubmittedCustomer/>} /> 
              <Route path="/oe/verifydetails/:customerId" element={<VerifyDetails/>} /> 
              <Route path="/cm/verifiedlist" element={<CustomerVerified/>} />
              <Route path="/cm/sanctionloan/:customerId" element={<LoanSanction/>} />
      </Routes>
      </div>
      {/* <Dashboard></Dashboard> */}

      </BrowserRouter>
    </>
  )
}
export default App