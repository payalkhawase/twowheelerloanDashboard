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
import EnquiryApprovedOE from './oe/EnquiryApprovedOE.jsx'
import EnquiryRejectedOE from './oe/EnquiryRejectedOE.jsx'

import CustomerList from './enquiry/CustomerList.jsx'

import ForwardOe from './oe/ForwardOe.jsx' 

// import CustomerVerified from './oe/CustomerVerified.jsx'
import SubmittedCustomer from './oe/SubmittedCustomer.jsx'
import VerifyDetails from './oe/VerifyDetails.jsx'
import CustomerVerified from './CM/CustomerVerified.jsx'
import LoanSanction from './CM/LoanSanction.jsx'
import Customer from './enquiry/customer/Customer.jsx'
import ViewProfile from './CUSTOMER/ViewProfile.jsx'
import ViewSaction from './CUSTOMER/ViewSaction.jsx'
import LoginCustomer from './template/LoginCustomer.jsx'
import ViewSanctionList from './AH/ViewSanctionList.jsx'
import ViewDisburstList from './AH/ViewDisburstList.jsx'
import ViewLedgerCustomerList from './AH/ViewLedgerCutomerList.jsx'




function App() {
  const [count, setCount] = useState(0)
  // Your routes here

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
              <Route path="/customerlogin" element={<LoginCustomer/>} />
              
              {/* <Route path="/customerList" element={<CustomerList/>} /> */}

              <Route path="/dashboard/" element={<Dashboard/>} />
              <Route path="/enquiry/enquiryPending" element={<EnquiryPending/>} />
              <Route path="/enquiry/enquiryApproved" element={<EnquiryApproved/>} />
              <Route path="/enquiry/enquiryRejected" element={<EnquiryRejected/>} />
              <Route path="/customer/customer" element={<Customer/>} />
              <Route path='/oe/enquiryApprovedOe' element={<EnquiryApprovedOE/>} />
              <Route path='/oe/enquiryRejectedOe' element={<EnquiryRejectedOE/>}/>

              <Route path="enquiry/customerList" element={<CustomerList />} />
              {/* <Route path="/customer/customerList" element={<CustomerList/>} /> */}
              <Route path="/oe/forwordoe" element={<ForwardOe/>} />
              <Route path="/oe/submittedlist" element={<SubmittedCustomer/>} /> 
              <Route path="/oe/verifydetails/:customerId" element={<VerifyDetails/>} /> 
              <Route path="/cm/verifiedlist" element={<CustomerVerified/>} />
              <Route path="/cm/sanctionloan/:customerId" element={<LoanSanction/>} />
              <Route path="/customer/viewprofile" element={<ViewProfile/>} />
              <Route path="/customer/viewsanction" element={<ViewSaction/>} />
              <Route path="/ah/viewsanctionlist" element={<ViewSanctionList/>} />
              <Route path='/ah/ViewDisburstList' element={<ViewDisburstList/>} />
              <Route path='/ah/ViewLedgerCustomerList' element={<ViewLedgerCustomerList/>} />
      </Routes>
      </div>
      

      </BrowserRouter>
    </>
  )
}

export default App