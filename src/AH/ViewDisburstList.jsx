import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../layout/Sidenav';



function ViewDisburstList() {

  const { customerId } = useParams();
  const [customers, setCustomers] = useState([]); // Changed from single customer to array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [cust, setCust] = useState()

  const getCustomer = () => {
    console.log("Fetching customer for ID:", customerId);

    // Fetch all verified customers (or replace with specific endpoint if needed)
    axios.get(`http://localhost:9194/apploan/getDisburstCustomers`)
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

  const onPayloan = (customerId) => {
  alert("Disbursing loan for Customer ID:"+ customerId);
  // You can perform an API call here to trigger disbursement
  // axios.post or axios.put
  console.log(`http://localhost:9198/led/generateledger/${customerId}`);
  axios.post(`http://localhost:9198/led/generateledger/${customerId}`, {
    customerId
  })
  .then(res => {
    alert("Loan EMI Paid successfully!");
    getCustomer(); // Refresh data if needed
  })
  .catch(err => {
    console.error("Loan emi error:", err);
    alert("Failed to EMI loan.");
  });
};

 const onLedger = (customerId) => {
  alert("Disbursing loan for Customer ID:"+ customerId);
  // You can perform an API call here to trigger disbursement
  // axios.post or axios.put
  console.log(`http://localhost:9194/apploan/getaCustomer/${customerId}`);
  axios.get(`http://localhost:9194/apploan/getaCustomer/${customerId}`, {
    customerId
  })
  .then(res => {
      console.log(res.data);
      setCust(customerId)
    navigate('/ah/ViewLedgerCustomerList', { state: { cust: customerId } });
    // alert("Loan EMI Paid successfully!");
    // getCustomer(); // Refresh data if needed
  })
  .catch(err => {
    console.error("Ledger error:", err);
    alert("Failed to EMI loan.");
  });
};

  useEffect(() => {
    getCustomer();
  }, [customerId]);
  return (
     <div style={{ display: 'flex' }}>
      <Sidenav />
      <div className="container mt-4">
        <h3>Customer Disburst Details</h3>

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
<td><button className="btn btn-sm btn-primary me-2" onClick={()=>onPayloan(customer.customerId)}>Pay EMI</button>
<button className="btn btn-sm btn-primary me-2" onClick={()=>onLedger(customer.customerId)}>View Ledger</button>
</td>

                 
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && customers.length === 0 && <p>No customer data available.</p>}
      </div>
    </div>
  )
}

export default ViewDisburstList