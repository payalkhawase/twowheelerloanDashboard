import React from 'react'

import Page from '../layout/Page';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import EnquiryPending from '../enquiry/EnquiryPending';
import EnquiryApproved from '../enquiry/EnquiryApproved';
import EnquiryRejected from '../enquiry/EnquiryRejected';
function Sidenav() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const userJson = localStorage.getItem("user");
  const { userType , empImage,empLastName,empFirstName} = JSON.parse(userJson);

  const navigate = useNavigate();

  const options = {
    ADMIN: [
      {
        header: "Enquiry",
        links: [
          { label: "Pending Enquiry", to: "/enquiry/enquiryPending" },
          { label: "Approved Enquiry", to: "/enquiry/enquiryApproved" },
          { label: "Rejected Enquiry", to: "/enquiry/enquiryRejected" }
        ]
      },
      {
        header: "Employee",
        links: [
          { label: "Add Employee", to: "/enquiry/enquiryPending" },
          { label: "View Employee", to: "/enquiry/enquiryPending" }
        ]
      }
    ],
    CRM: [
      {
        header: "Enquiry",
        links: [
          { label: "Pending Enquiry", to: "/enquiry/enquiryPending" },
          { label: "Approved Enquiry", to: "/enquiry/enquiryApproved" },
          { label: "Rejected Enquiry", to: "/enquiry/enquiryRejected" }
        ]
      }
    ]
  };

  function logout()
    {
        localStorage.removeItem("user");
        navigate("/")
    }


  return (
    <div>
      {/* <Router> */}
      <div className="d-flex">
        {/* Sidebar */}
        <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
          <div style={{display:'flex'}}>
        <img src={'data:image/jpeg;base64,' + empImage} alt="Profile" style={{width:'100px',height:'100px'}} className="img-fluid rounded-circle mb-3" />
          <div>
          <h4>{userType}</h4>
          <h6>{empFirstName+" "+empLastName}</h6>
          </div></div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
            </li>

            {options[userType]?.map((section, sectionIndex) => (
              <li className="nav-item" key={sectionIndex}>
                <button
                  className="btn btn-link text-white text-start w-100"
                  onClick={() => setOpenMenu(!openMenu)}
                  aria-controls={`submenu-${sectionIndex}`}
                  aria-expanded={openMenu}
                >
                  {section.header} ▾
                </button>
                <Collapse in={openMenu}>
                  <ul id={`submenu-${sectionIndex}`} className="nav flex-column ms-3">
                    {section.links.map((link, linkIndex) => (
                      <li className="nav-item" key={linkIndex}>
                        <Link to={link.to} className="nav-link text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              </li>
            ))}

            <li className="nav-item">
              <Link to="/" onClick={logout} className="nav-link text-white"><i className="bi bi-box-arrow-right"></i> Logout</Link>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/enquiry/enquiryPending" element={<EnquiryPending />} />
            <Route path="/enquiry/enquiryApproved" element={<EnquiryApproved />} />
            <Route path="/enquiry/enquiryRejected" element={<EnquiryRejected />} />
            {/* <Route path="/template/logout" element={<Logout />} /> */}
          </Routes>
        </div>
      </div>
      {/* </Router> */}
    </div>

  )
}

export default Sidenav
