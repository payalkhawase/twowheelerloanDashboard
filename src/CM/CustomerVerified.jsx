import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Sidenav from '../layout/Sidenav';

function CustomerVerified() {
  const { customerId } = useParams();
  const [customers, setCustomers] = useState([]); // Changed from single customer to array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCustomer = () => {

    // Fetch all verified customers (or replace with specific endpoint if needed)
    axios.get("http://localhost:9194/apploan/getVerifiedCustomers")
    
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
                <th>Dependant name</th>
                <th>Address</th>
                <th>Cibil score</th>
                <th>Account number</th>
                <th>Guarantor name</th>
                <th>Disbursement date</th>
                <th>Ledger</th>
                <th>Sanction letter</th>
                <th>Customer verification</th>
                <th>Action</th>




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
                  <td>{customer.cibil?.score !== undefined ? customer.cibil.score : "N/A"}</td>
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
<td>
  {customer.custVerification
    ? `Date: ${customer.custVerification.verificationDate || new Date().toLocaleString()}, Status: ${customer.custVerification.status || "Verified"}, Remarks: ${customer.custVerification.remarks || "All Docs Verified"}`
    : `Date: ${new Date().toLocaleString()}, Status: N/A, Remarks: N/A`}
</td>
                 <Link to={`/cm/sanctionloan/${customer.customerId}`}  className="btn btn-sm btn-primary me-2">LoanSanction</Link>
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
