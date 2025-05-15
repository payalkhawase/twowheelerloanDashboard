import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CustomerVerify() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:9194/apploan/getaCustomer/${customerId}`)
      .then(res => setCustomer(res.data))
      .catch(err => {
        console.error("Failed to fetch customer:", err);
        setMessage("Unable to load customer information.");
      });
  }, [customerId]);

  const handleStatusChange = (loanStatus) => {
    axios.put(`http://localhost:9193/oe/changeloanstatus/${customerId}/${loanStatus}`)
      .then(() => {
        setMessage(`Customer successfully marked as ${loanStatus}.`);
      })
      .catch(() => {
        setMessage(`Failed to update status to ${loanStatus}.`);
      });
  };

  if (!customer) return <div>Loading customer details...</div>;

  return (
    <div className="container mt-4">
      <h3>Customer ID: {customer.customerId}</h3>
      <hr />

      <p><strong>Name:</strong> {customer.customerName}</p>
      <p><strong>Email:</strong> {customer.customerEmail}</p>
      <p><strong>Mobile:</strong> {customer.customerMobileNumber}</p>
      <p><strong>DOB:</strong> {customer.customerDateOfBirth}</p>
      <p><strong>Loan Amount:</strong> ₹{customer.customerTotalLoanRequired}</p>
      
      <h5>Address</h5>
      <p>{customer.custAddr?.addressLine1}, {customer.custAddr?.city}</p>

      <h5>CIBIL</h5>
      <p>Score: {customer.cibil?.cibilScore}</p>
      <p>Status: {customer.cibil?.status}</p>
      <p>Remark: {customer.cibil?.cibilRemark}</p>

      {/* Add more fields as needed from other entities */}

      {message && <div className="alert alert-info mt-3">{message}</div>}

      <div className="mt-4">
        <button 
          className="btn btn-success me-3"
          onClick={() => handleStatusChange("Verified")}
        >
          Verify
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => handleStatusChange("Rejected")}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default CustomerVerify;
