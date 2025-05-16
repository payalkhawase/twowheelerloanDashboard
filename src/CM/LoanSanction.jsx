import React, { useEffect } from "react";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidenav from "../layout/Sidenav";


function LoanSanction() {
  const { register, handleSubmit, reset,setValue } = useForm();
  const {customerId} = useParams();

  const navigate = useNavigate();

  function getCustomer()
  {
     const response = axios.get(`http://localhost:9194/apploan/getSingleCustomerVerified/${customerId}`)
      .then((res)=>
        {
          alert("Customer data fetched successfully!");
          for(let prop in res.data)
          {
            setValue(prop,res.data[prop])
          }
          console.log(res.data);
        }
        )
      .catch((error)=>console.log(error));
  }

  useEffect(()=>getCustomer,[])
   

  function onSubmitSanction(data)
  {
    axios.post(`http://localhost:9195/sanction/addSanction/${customerId}`,data)
    .then((res)=>
      {alert("Sanction generated...!!");
         navigate("/cm/verifiedlist"); 
  })
    .catch((error)=>console.log(error))
  }

  

  return (
    <div  style={{display: 'flex'}}>
      <Sidenav/>
      <div className="container mt-5">
        <h2 className="mb-4">Sanction Form</h2>
        <form onSubmit={handleSubmit(onSubmitSanction)} className="row g-3">

          {/* <div className="col-md-6">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" {...register("sanctionletter.sanctionDate")} required />
          </div> */}

          <div className="col-md-6">
            <label className="form-label">Applicant Name</label>
            <input type="text" className="form-control" {...register("customerName")} required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Contact Details</label>
            <input type="text" className="form-control" {...register("customerMobileNumber")} required />
          </div>

          {/* <div className="col-md-6">
            <label className="form-label">Loan Amount Sanctioned</label>
            <input type="number" step="0.01" className="form-control" {...register("loanAmtSanctioned")} required />
          </div> */}

          <div className="col-md-6">
            <label className="form-label">Interest Type</label>
            <input type="text" className="form-control" {...register("interesType")} required />
          </div>

          {/* <div className="col-md-6">
            <label className="form-label">Rate of Interest (%)</label>
            <input type="number" step="0.01" className="form-control" {...register("rateOfInterest")} required />
          </div> */}

          {/* <div className="col-md-6">
            <label className="form-label">Loan Tenure (Months)</label>
            <input type="number" className="form-control" {...register("loanTenureInMonth")} required />
          </div> */}

          {/* <div className="col-md-6">
            <label className="form-label">Monthly EMI Amount</label>
            <input type="number" step="0.01" className="form-control" {...register("monthlyEmiAmount")} required />
          </div> */}

          {/* <div className="col-md-6">
            <label className="form-label">Mode of Payment</label>
            <input type="text" className="form-control" {...register("modeOfPayment")} required />
          </div> */}

          <div className="col-md-6">
            <label className="form-label">On Road Price</label>
            <input type="number" step="0.01" className="form-control" {...register("onRoadPrice")} required />
          </div>

          {/* <div className="col-md-6">
            <label className="form-label">Status</label>
            <input type="text" className="form-control" {...register("status")} required />
          </div> */}


          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </form>
    </div></div>
  );
}

export default LoanSanction;
