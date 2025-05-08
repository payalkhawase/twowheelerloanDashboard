import React from 'react'
import Sidenav from '../layout/Sidenav'
import EnquiryRejected from '../enquiry/EnquiryRejected'

// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
// import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Dashboard() {
  
  return (
  <div>
    {/* <h2>Dashboard</h2> */}
    <Sidenav/>
    <EnquiryRejected/>
  </div>

  )
}

export default Dashboard