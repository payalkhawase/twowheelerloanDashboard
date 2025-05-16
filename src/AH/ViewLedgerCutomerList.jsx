import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Sidenav from '../layout/Sidenav';



function ViewLedgerCustomerList() {

  const { customerId } = useParams();
  const [customers, setCustomers] = useState([]); // Changed from single customer to array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ledger,setLedger] = useState();
  const location = useLocation();
  const cust = location.state?.cust;
  console.log(cust);

  const getCustomer = () => {
    console.log("Fetching customer for ID:", cust);

    // Fetch all verified customers (or replace with specific endpoint if needed)
    axios.get(`http://localhost:9194/apploan/getaCustomer/${cust}`)
      .then(res => {
        const custs = res.data;
        console.log(custs);
        setCustomers(custs);
         setLedger(res.data.led);
        console.log("API Ledger:", res.data.led);
        const cname = customers.customerName;
        if (Array.isArray(res.data)) {
          // setCustomers(res.data);
        //  setLedger(res.data.led);

        } else {
          setError("");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching customer:", err);
        setError(`Failed to load customer data. Error: ${err.message}`);
        setLoading(false);
      });
  };


  const ondisburst = (customerId, loanAmount) => {
  alert("Disbursing loan for Customer ID:", customerId, "Loan Amount:", loanAmount);
  // You can perform an API call here to trigger disbursement
  // axios.post or axios.put
  console.log(`http://localhost:9196/disburse/adddisbursment/${loanAmount}/${customerId}`);
  axios.post(`http://localhost:9196/disburse/adddisbursment/${loanAmount}/${customerId}`, {
    customerId,
    loanAmount
  })
  .then(res => {
    alert("Loan disbursed successfully!");
    getCustomer(); // Refresh data if needed
  })
  .catch(err => {
    console.error("Disbursement error:", err);
    alert("Failed to disburse loan.");
  });
};


  useEffect(() => {
    getCustomer();
  }, [cust]);
  return (
     <div style={{ display: 'flex' }}>
      <Sidenav />
      <div className="container mt-4">
        <h3>Customer Ledger Details</h3>
        <h2>{customers.customerName}</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && ledger.length > 0 && (
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Ledger ID</th>
                <th>Amount Paid Till Date </th>
                <th>Current Month EMI Status</th>
                <th>Defaulter Count</th>
                <th>Ledger Created Date </th>
                <th>Loan End Date</th>
                <th>Loan Status</th>
                <th>Monthly EMI</th>
                <th>Next EMI End Date</th>
                <th>Next EMI Start Date</th>
                <th>PAyable Amount with interest</th>
                <th>Previous EMI Status</th>
                <th>Remaining Ammount</th>
                <th>Tenure (Month)</th>
                <th>Total Loan Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ledger.map((ledger, index) => (
                <tr key={ledger.ledgerId || index}>
                  <td>{ledger.ledgerId}</td>
                  <td>{ledger.amountPaidtillDate}</td>
                  <td>{ledger.currentMonthEmiStatus}</td>
                  <td>{ledger.defaulterCount}</td>
                  <td>{ledger.ledgerCreatedDate}</td>
                  <td>{ledger.loanEndDate}</td>
                  <td>{ledger.loanStatus}</td>
                  <td>{ledger.monthlyEMI}</td>
                  <td>{ledger.nextEmiDateEnd}</td>
                  <td>{ledger.nextEmiDatestart}</td>
                  <td>{ledger.payableAmountwithInterest}</td>
                  <td>{ledger.previousEmitStatus}</td>
                  <td>{ledger.remainingAmount}</td>
                  <td>{ledger.tenure}</td>
                  <td>{ledger.totalLoanAmount}</td>
                  
<td>
   <button className="btn btn-sm btn-primary me-2" ></button>
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

export default ViewLedgerCustomerList