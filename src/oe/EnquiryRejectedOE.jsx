import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from '../layout/Sidenav';

function EnquiryRejectedOE() {
  const [enquiry, setEnquiry] = useState([]);

  function getList() {
    axios.get("http://localhost:7777/enq/RejectedEnquiry")
      .then(res => {
        setEnquiry(res.data);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div style={{display:'flex'}}>
      <Sidenav/>
      <div className="container mt-4">
        <h3>Enquiry Rejected List</h3>
        <table className="table table-bordered table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>firstname</th>
              <th>lastName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Alter Mobile</th>
              <th>City</th>
              <th>address</th>
              <th>Pan No</th>
              <th>Adhar card No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiry.map((item, index) => (
              <tr key={item.id || index}>
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
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnquiryRejectedOE;
