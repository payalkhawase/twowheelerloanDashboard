// import React from 'react'

// function ViewProfile() {
//   return (
//     <div>ViewProfile</div>
//   )
// }

// export default ViewProfile


import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidenav from "../layout/Sidenav";


function ViewSaction()
{

const { register, handleSubmit, reset,setValue,getValues} = useForm();
const customerJson = localStorage.getItem("user");
const customer = JSON.parse(customerJson);
console.log(customer);

for(let prop in customer)
{
    setValue(prop, customer[prop])
    console.log(prop)
}
   

//   function onSubmitSanction(data)
//   {
//     alert("Sanction Accepted...!!")
//   }


function acceptSanctionStatus(data)
{
   console.log(data)
     const response = axios.put(`http://localhost:9195/sanction/updateSanctionStatus/${data.customerId}/Accepted`,data)
      .then((res)=>
        {
         alert("sanction accepted.....")
          
        }
        )
      .catch((error)=>console.log(error));


}  

// function rejectSanctionStatus  ()  {
//     const data = getValues(); // get current form values
//     axios
//       .put(`http://localhost:9195/sanction/updateSanctionStatus/${data.customerId}/Rejected`, data)
//       .then((res) => {
//         alert("Sanction Rejected.");
//       })
//       .catch((error) => console.log(error));
//   };

  return (
    <div style={{display:'flex'}}>
      <Sidenav/>
    <div className="container mt-5">
      <h2 className="mb-4">View Profile</h2>
      <form onSubmit={handleSubmit(acceptSanctionStatus)} className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" {...register("sanctionletter.sanctionDate")} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Applicant Name</label>
          <input type="text" className="form-control" {...register("customerName")} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Contact Details</label>
          <input type="text" className="form-control" {...register("customerMobileNumber")} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" {...register("customerEmail")} required />
        </div>

         <div className="col-md-6">
          <label className="form-label">Date Of Birth</label>
          <input type="text" className="form-control" {...register("customerDateOfBirth")} required />
        </div>

        {/* <div className="col-md-6">
          <label className="form-label">Loan Amount Sanctioned</label>
          <input type="number" step="0.01" className="form-control" {...register("sanctionletter.loanAmtSanctioned")} required />
        </div> */}

        {/* <div className="col-md-6">
          <label className="form-label">Interest Type</label>
          <input type="text" className="form-control" {...register("interesType")} required />
        </div> */}

        {/* <div className="col-md-6">
          <label className="form-label">Rate of Interest (%)</label>
          <input type="number" step="0.01" className="form-control" {...register("sanctionletter.rateOfInterest")} required />
        </div> */}

        {/* <div className="col-md-6">
          <label className="form-label">Loan Tenure (Months)</label>
          <input type="number" className="form-control" {...register("sanctionletter.loanTenureInMonth")} required />
        </div> */}

        {/* <div className="col-md-6">
          <label className="form-label">Monthly EMI Amount</label>
          <input type="text" step="0.01" className="form-control" {...register("sanctionletter.monthlyEmiAmount")} required />
        </div> */}

        {/* <div className="col-md-6">
          <label className="form-label">Mode of Payment</label>
          <input type="text" className="form-control" {...register("sanctionletter.modeOfPayment")} required />
        </div> */}

        {/* <div className="col-md-6">
          <label className="form-label">On Road Price</label>
          <input type="number" step="0.01" className="form-control" {...register("onRoadPrice")} required />
        </div> */}

        {/* <div className="col-md-6">
          <label className="form-label">Status</label>
          <input type="text" className="form-control" {...register("sanctionletter.status")} required />
        </div> */}


        {/* <div className="col-12"> */}
          {/* <button type="submit" className="btn btn-primary">Accept</button> */}
           {/* <button type="button" className="btn btn-danger" onClick={rejectSanctionStatus}>Reject</button> */}
        {/* </div> */}

      </form>
    </div>
    </div>
  );
}

export default ViewSaction;
