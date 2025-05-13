

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from '../layout/Sidenav';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    axios.get("http://localhost:9194/apploan/getAllCustomer") 
      .then(res => {
        setCustomers(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.error("Error fetching customers:", err);
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidenav />
      <div className="container mt-4">
        <h2>Customer List</h2>

        {customers.map((cust, index) => (
          <div key={cust.customerId} className="mb-5">
            <h4 className="mt-4">#{index + 1}: {cust.customerName}</h4>

            {/* Basic Info */}
            <h5 className="mt-3">Basic Information</h5>
            <table className="table table-bordered">
              <tbody>
                <tr><th>DOB</th><td>{cust.customerDateOfBirth}</td></tr>
                <tr><th>Gender</th><td>{cust.customerGender}</td></tr>
                <tr><th>Mobile</th><td>{cust.customerMobileNumber}</td></tr>
                <tr><th>Email</th><td>{cust.customerEmail}</td></tr>
                <tr><th>Loan Status</th><td>{cust.loanStatus}</td></tr>
                <tr>
                  <th>Sanction Letter</th>
                  <td>
                    {cust.sanctionletter?.sanctionletterpdf ? (
                      <a
                        href={cust.sanctionletter.sanctionletterpdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View PDF
                      </a>
                    ) : (
                      <span className="text-muted">No PDF</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Address Info */}
            <h5>Address Details</h5>
            <table className="table table-bordered">
              <thead className="table-light"><tr>
                <th>Type</th>
                <th>Area</th>
                <th>City</th>
                <th>District</th>
                <th>State</th>
                <th>Pincode</th>
                <th>Street</th>
                <th>House No</th>
                </tr></thead>
              <tbody>
                <tr>
                  <td>Permanent</td>
                  <td>{cust.custAddr?.paddr?.areaname}</td>
                  <td>{cust.custAddr?.paddr?.cityname}</td>
                  <td>{cust.custAddr?.paddr?.district}</td>
                  <td>{cust.custAddr?.paddr?.state}</td>
                  <td>{cust.custAddr?.paddr?.pincode}</td>
                  <td>{cust.custAddr?.paddr?.streetName}</td>
                  <td>{cust.custAddr?.paddr?.houseNumber}</td>
                </tr>
                <tr>
                  <td>Local</td>
                  <td>{cust.custAddr?.laddr?.areaname}</td>
                  <td>{cust.custAddr?.laddr?.cityname}</td>
                  <td>{cust.custAddr?.laddr?.district}</td>
                  <td>{cust.custAddr?.laddr?.state}</td>
                  <td>{cust.custAddr?.laddr?.pincode}</td>
                  <td>{cust.custAddr?.laddr?.streetName}</td>
                  <td>{cust.custAddr?.laddr?.houseNumber}</td>
                </tr>
              </tbody>
            </table>

            {/* CIBIL Info */}
            <h5>CIBIL Details</h5>
            <table className="table table-bordered">
              <thead className="table-light"><tr>
                <th>Score</th>
                <th>Status</th>
                <th>Date</th>
                <th>Remarks</th>
                </tr></thead>
              <tbody>
                <tr>
                  <td>{cust.cibil?.cibilScore}</td>
                  <td>{cust.cibil?.status}</td>
                  <td>{new Date(cust.cibil?.cibilscoredDateTime).toLocaleDateString()}</td>
                  <td>{cust.cibil?.cibilRemark}</td>
                </tr>
              </tbody>
            </table>

            {/* Account Info */}
            <h5>Account Details</h5>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                    <th>Bank</th>
                    <th>IFSC</th>
                    <th>Acc. No</th>
                    <th>Holder</th>
                    <th>Type</th>
                    <th>Balance</th>
                    <th>Status</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cust.acdetails?.bankName}</td>
                  <td>{cust.acdetails?.ifscCode}</td>
                  <td>{cust.acdetails?.accountNumber}</td>
                  <td>{cust.acdetails?.accountHolderName}</td>
                  <td>{cust.acdetails?.accountType}</td>
                  <td>{cust.acdetails?.accountBalance}</td>
                  <td>{cust.acdetails?.accountStatus}</td>
                </tr>
              </tbody>
            </table>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerList;
