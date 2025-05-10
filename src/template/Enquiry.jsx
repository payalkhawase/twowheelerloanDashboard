import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  firstNameValidation, lastNameValidation, addressvalidation,
  agevalidation, emailIdValidation, mobileNumberValidation,
  alternatemobileNumberValidation, pancardValidation,
  adharcardValidation, passwordValidation
} from './Enquiry/EnquiryValidation';


export default function Enquiry() {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [enquiries, setEnquiries] = useState([]);
  const [customerId, setCustomerId] = useState("");
 function saveData(data) {
    axios
      .post("http://localhost:9191/enq/add", data)
      .then((response) => {
        alert("Form submitted successfully!");
        reset();
      })
      .catch((error) => {
        alert("Error submitting form");
        console.error("Submission error:", error);
      });
  }

  function onReset() {
    reset();
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Enquiry Form</h2>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input {...register('firstname', firstNameValidation)} className="form-control" placeholder="First Name" />
          {errors.firstname && <div className="text-danger">{errors.firstname.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input {...register('lastName', lastNameValidation)} className="form-control" placeholder="Last Name" />
          {errors.lastName && <div className="text-danger">{errors.lastName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input {...register('address', addressvalidation)} className="form-control" placeholder="Address" />
          {errors.address && <div className="text-danger">{errors.address.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input {...register('city', addressvalidation)} className="form-control" placeholder="City" />
          {errors.city && <div className="text-danger">{errors.city.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input {...register('age', agevalidation)} className="form-control" placeholder="Age" type="number" />
          {errors.age && <div className="text-danger">{errors.age.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input  {...register('email', emailIdValidation)} className="form-control" placeholder="Email" autoComplete="username" 
/>

          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input {...register('mobileNo', mobileNumberValidation)} className="form-control" placeholder="Mobile Number" />
          {errors.mobileNo && <div className="text-danger">{errors.mobileNo.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Alternate Mobile Number</label>
          <input {...register('alternateMobno', alternatemobileNumberValidation)} className="form-control" placeholder="Alternate Mobile Number" />
          {errors.alternatemobileNo && <div className="text-danger">{errors.alternatemobileNo.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">PAN Card Number</label>
          <input {...register('pancardNo', pancardValidation)} className="form-control" placeholder="PAN Card Number"autoComplete="off"
/>

          {errors.pancardNo && <div className="text-danger">{errors.pancardNo.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
  {...register('password', passwordValidation)}  className="form-control" placeholder="Password" type="password" autoComplete="current-password" 
/>

          {errors.password && <div className="text-danger">{errors.password.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Aadhar Card Number</label>
          <input {...register('adharcardNo', adharcardValidation)} className="form-control" placeholder="Aadhar Card Number" />
          {errors.adharcardNo && <div className="text-danger">{errors.adharcardNo.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary me-2">Submit</button>
        <button type="reset" onClick={onReset} className="btn btn-secondary">Reset</button>
      </form>
    </div>
  );
}
