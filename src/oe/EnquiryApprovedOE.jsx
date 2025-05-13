import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from '../layout/Sidenav';
import Customer from './customer/Customer';
import { useNavigate } from 'react-router-dom';

function EnquiryApprovedOE() {
  const [enquiry, setEnquiry] = useState([]);

  const navigate = useNavigate();
  function getList() {
    axios.get("http://localhost:9191/enq/ApprovedEnquiry")
      .then(res => {
        setEnquiry(res.data);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }

  const [enqId, setEnqId] = useState()
  const [showCustomer, setShowCustomer] = useState(false)

  function getForm(id)
  {
    setShowCustomer(true)
    setEnqId(id)
    navigate('/customer/customer', { state: { enqId: id } });
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div style={{display:'flex'}}>
      <Sidenav/>
      <div className="container mt-4">
        <h3>Enquiry Approved List</h3>
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
                  <button className="btn btn-sm btn-danger">Delete d</button>
                  <button className="btn btn-sm btn-danger" onClick={()=>getForm(item.customerId)}>Form</button>
                  {/* {showCustomer && <Customer enqId={enqId} />} */}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnquiryApprovedOE;
