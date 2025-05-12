import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidenav from '../layout/Sidenav';

function CustomerVerified() {
  const { customerId } = useParams();
  const [customers, setCustomers] = useState([]); // Changed from single customer to array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCustomer = () => {
    console.log("Fetching customer for ID:", customerId);

    // Fetch all verified customers (or replace with specific endpoint if needed)
    axios.get(`http://localhost:9194/apploan/getCustomerVerified`)
      .then(res => {
        console.log("API Response:", res.data);
        if (Array.isArray(res.data)) {
          setCustomers(res.data);
        } else {
          setError("Unexpected data format.");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching customer:", err);
        setError(`Failed to load customer data. Error: ${err.message}`);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCustomer();
  }, [customerId]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidenav />
      <div className="container mt-4">
        <h3>Customer Verified Details</h3>

        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && customers.length > 0 && (
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Mobile Number</th>
                <th>Additional Mobile Number</th>
                <th>Email</th>
                <th>Amount Paid for Bike</th>
                <th>Total Loan Required</th>
                <th>Loan Status</th>
                <th>On-Road Price</th>
                <th>Required Tenure</th>
                <th>Interest Type</th>
                <th>Personal Documents</th>
                <th>Dependent Information</th>
                <th>Customer Address</th>
                <th>CIBIL Score</th>
                <th>Account Details</th>
                <th>Guarantor Details</th>
                <th>Loan Disbursement</th>
                <th>Ledger</th>
                <th>Sanction Letter</th>
                <th>Customer Verification</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer.customerId || index}>
                  <td>{customer.customerId}</td>
                  <td>{customer.customerName}</td>
                  <td>{customer.customerDateOfBirth}</td>
                  <td>{customer.customerAge}</td>
                  <td>{customer.customerGender}</td>
                  <td>{customer.customerMobileNumber}</td>
                  <td>{customer.customerAdditionalMobileNumber}</td>
                  <td>{customer.customerEmail}</td>
                  <td>{customer.customerAmountPaidForBike}</td>
                  <td>{customer.customerTotalLoanRequired}</td>
                  <td>{customer.loanStatus}</td>
                  <td>{customer.onRoadPrice}</td>
                  <td>{customer.requiredTenure}</td>
                  <td>{customer.interestType || "Compound Interest"}</td>
                  <td>{customer.personalDoc?.documentType || "N/A"}</td>
                  <td>{customer.depInfo?.dependentName || "N/A"}</td>
                  <td>{customer.custAddr?.address || "N/A"}</td>
                  <td>{customer.cibil?.score || "N/A"}</td>
                  <td>{customer.acdetails?.accountNumber || "N/A"}</td>
                  <td>{customer.gdetails?.guarantorName || "N/A"}</td>
                  <td>{customer.loandisburst?.disbursementDate || "N/A"}</td>
                  <td>
                    {customer.led?.length > 0
                      ? customer.led.map((ledger, idx) => (
                          <span key={idx}>{ledger.transactionDetails}{idx < customer.led.length - 1 ? ', ' : ''}</span>
                        ))
                      : "N/A"}
                  </td>
                  <td>{customer.sanctionletter?.sanctionDate || "N/A"}</td>
                  <td>{customer.custVerification?.verificationStatus || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && customers.length === 0 && <p>No customer data available.</p>}
      </div>
    </div>
  );
}

export default CustomerVerified;
