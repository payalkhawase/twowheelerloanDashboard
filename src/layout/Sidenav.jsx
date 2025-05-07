import React from 'react'

import Page from '../layout/Page';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import EnquiryPending from '../enquiry/EnquiryPending';
import EnquiryApproved from '../enquiry/EnquiryApproved';
import EnquiryRejected from '../enquiry/EnquiryRejected';
function Sidenav() {
     const [openMenu, setOpenMenu] = React.useState(false);
  
  return (
  <div>
    {/* <Router> */}
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4>Admin</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link text-white text-start w-100"
              onClick={() => setOpenMenu(!openMenu)}
              aria-controls="submenu"
              aria-expanded={openMenu}
            >
              Enquiry ▾
            </button>
            <Collapse in={openMenu}>
              <ul id="submenu" className="nav flex-column ms-3">
                <li className="nav-item">
                  <Link to="/enquiry/enquiryPending" className="nav-link text-white">Enquiry Pending</Link>
                </li>
                <li className="nav-item">
                  <Link to="/enquiry/enquiryApproved" className="nav-link text-white">Enquiry Approved</Link>
                </li>
                <li className="nav-item">
                  <Link to="/enquiry/enquiryRejected" className="nav-link text-white">Enquiry Rejected</Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link text-white">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Content */}
       <div className="flex-grow-1 p-3">
        <Routes>
        <Route path="/enquiry/enquiryPending" element={<EnquiryPending />} />
        <Route path="/enquiry/enquiryApproved" element={<EnquiryApproved />} />
        <Route path="/enquiry/enquiryRejected" element={<EnquiryRejected />} />
        </Routes>
      </div> 
    </div>
  {/* </Router> */}
  </div>

  )
}

export default Sidenav
