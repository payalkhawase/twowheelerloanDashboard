import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from '../layout/Sidenav';

function EnquiryPending() {
  const [enquiry, setEnquiry] = useState([]);

  function getList() {
    axios.get("http://localhost:7777/enq/enquiry/getPendingEnquiry")
      .then(res => {
        setEnquiry(res.data);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }

  function handleForwardOE(id) {
    axios.put(`http://localhost:7777/enq/updateEnquiryStatusforword/${id}`)
      .then(res => {
        alert("Enquiry forwarded successfully!");
        getList(); 
      })
      .catch(err => {
        console.error("Error forwarding enquiry:", err);
        alert("Failed to forward enquiry.");
      });
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidenav />
      <div className="container mt-4">
        <h3>Enquiry Pending List</h3>
        <table className="table table-bordered table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Alternate Mobile</th>
              <th>City</th>
              <th>Address</th>
              <th>PAN No</th>
              <th>Aadhaar No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiry.map((item, index) => (
              <tr key={item.customerId}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobileNo}</td>
                <td>{item.alternateMobno}</td>
                <td>{item.city}</td>
                <td>{item.address}</td>
                <td>{item.pancardNo}</td>
                <td>{item.adharcardNo}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger me-2">Delete</button>
                  <button className="btn btn-sm btn-success" onClick={() => handleForwardOE(item.customerId)}>
                    ForwardOE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnquiryPending;
