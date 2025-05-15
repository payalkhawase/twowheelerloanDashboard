import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from '../layout/Sidenav';

function EnquiryPending() {
  const [enquiry, setEnquiry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the list of pending enquiries
  const getList = () => {
    setLoading(true);
    axios.get("http://localhost:7777/enq/enquiry/getPendingEnquiry")
      .then((res) => {
        setEnquiry(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch enquiries.");
        setLoading(false);
      });
  };

  // Forward the enquiry (PUT request)
  const handleForwardOE = (customerId) => {
    axios.put(`http://localhost:9191/enq/updateEnquiryStatusforword/${customerId}`)
      .then((res) => {
        alert("Enquiry forwarded successfully!");
        getList(); // Refresh the list
      })
      .catch((err) => {
        console.error("Error forwarding enquiry:", err);
        alert("Failed to forward enquiry. Check backend or ID.");
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidenav />
      <div className="container mt-4">
        <h3>Pending Enquiries</h3>

        {loading && <p>Loading enquiries...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && enquiry.length === 0 && (
          <p>No pending enquiries found.</p>
        )}

        {!loading && enquiry.length > 0 && (
          <table className="table table-bordered table-hover mt-3">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
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

              {enquiry.map((item, index) => 
                <tr key={item.customerId || index}>
                  <td>{item.customerId || index + 1}</td>
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
                    <button className="btn btn-sm btn-primary me-2" disabled>Edit</button>
                    <button className="btn btn-sm btn-danger me-2" disabled>Delete</button>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleForwardOE(item.customerId)}
                    >
                      ForwardOE
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}


export default EnquiryPending
