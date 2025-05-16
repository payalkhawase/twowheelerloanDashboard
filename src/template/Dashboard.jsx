import React from 'react';
import Sidenav from '../layout/Sidenav';
import EnquiryRejected from '../enquiry/EnquiryRejected';
import EnquiryPending from '../enquiry/EnquiryPending';
import EnquiryApproved from '../enquiry/EnquiryApproved';
import CustomerList from '../enquiry/CustomerList';
import { Route, Routes } from 'react-router-dom';
import ForwardOe from '../oe/ForwardOe';

import CustomerVerified from '../CM/CustomerVerified';
import SubmittedCustomer from '../oe/SubmittedCustomer';
import VerifyDetails from '../oe/VerifyDetails';
import LoanSanction from '../CM/LoanSanction';
import ViewProfile from '../CUSTOMER/ViewProfile';
import ViewSaction from '../CUSTOMER/ViewSaction';
import ViewSanctionList from '../AH/ViewSanctionList';
import ViewDisburstList from '../AH/ViewDisburstList';

function Dashboard() {

  const userJson = localStorage.getItem("user");
  const { userType } = JSON.parse(userJson);

  console.log(JSON.parse(userJson));

  const appRoute = {
    ADMIN: [
      { path:'/enquiry/enquiryPending', component: <EnquiryPending /> },
      { path:'/enquiry/enquiryApproved', component: <EnquiryApproved /> },
      { path:'/enquiry/enquiryRejected', component:<EnquiryRejected/>},
      { path:'/enquiry/customerList', component:<CustomerList/>}

    ],
    CRM: [
      { path: '/enquiry/enquiryPending', component: <EnquiryPending/> },
      { path: '/enquiry/enquiryApproved', component: <EnquiryApproved /> },


      { path: '/enquiry/enquiryRejected', component: <EnquiryRejected /> },
      { path: '/customer/customerlist', component:  <CustomerList/>}

    ],
    OE:[
      { path: '/oe/forwordoe', component: <ForwardOe/> },
      { path: '/oe/submittedlist', component: <SubmittedCustomer /> },
      { path:'/oe/verifydetails/:customerId',component: <VerifyDetails/>}
    ],
    CM:[
        { path: '/cm/verifiedlist', component: <CustomerVerified /> },
        {path:'/cm/sanctionloan/:customerId',component:<LoanSanction/>}

    ],
    CUSTOMER:[
        {path: '/customer/viewprofile',component: <ViewProfile/>},
        {path:  '/customer/viewsanction',component:<ViewSaction/>}

    ],
    AH:[
        {path: '/ah/viewsanctionlist',component: <ViewSanctionList/>},
        {path:  '/ah/ViewDisburstList',component:<ViewDisburstList/>}

    ]
    

  };

  const routesToRender = appRoute[userType] || [];

  return (
    <div className="d-flex">
      <Sidenav />
      <div className="flex-grow-1 p-3">
        <Routes>
          {routesToRender.map((mapping, index) => (
            <Route key={index} path={mapping.path} element={mapping.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;