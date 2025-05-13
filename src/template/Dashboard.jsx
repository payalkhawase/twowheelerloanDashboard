import React from 'react';
import Sidenav from '../layout/Sidenav';
import EnquiryRejected from '../enquiry/EnquiryRejected';
import EnquiryPending from '../enquiry/EnquiryPending';
import EnquiryApproved from '../enquiry/EnquiryApproved';
import CustomerList from '../enquiry/CustomerList';
import { Route, Routes } from 'react-router-dom';

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
      { path: '/enquiry/enquiryPending', component: <EnquiryPending /> },
      { path: '/enquiry/enquiryApproved', component: <EnquiryApproved /> },
      { path: '/enquiry/enquiryRejected', component: <EnquiryRejected /> },
      { path: '/customer/customerlist', component:  <CustomerList/>}
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
