import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
    
    guarantorNameValidation,
    guarantorDateOfBirthValidation,
    guarantorRelationshipwithCustomerValidation,
    guarantorMobileNumberValidation,
    guarantorAdharCardNoValidation,
    guarantorMortgageDetailsValidation,
    guarantorJobDetailsValidation,
    guarantorLoaclAddressValidation,
    guarantorPermanentAddressValidation
  } from './GuarantorValidation';
export default function GuarantorDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h4>Guarantor Details</h4>

      {/* <div className="mb-3">
        <label className="form-label">Guarantor ID</label>
        <input type="number" className="form-control" {...register("guarantorId",guarantorIdValidation)} />
        <div className="text-danger">{errors.guarantorId?.message}</div>
      </div> */}

      <div className="mb-3">
        <label className="form-label">Guarantor Name</label>
        <input type="text" className="form-control" {...register("guarantorName",guarantorNameValidation)} />
        <div className="text-danger">{errors.guarantorName?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input type="date" className="form-control" {...register("guarantorDateOfBirth",guarantorDateOfBirthValidation)} />
        <div className="text-danger">{errors.guarantorDateOfBirth?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Relationship with Customer</label>
        <input type="text" className="form-control" {...register("guarantorRelationshipwithCustomer",guarantorRelationshipwithCustomerValidation)} />
        <div className="text-danger">{errors.guarantorRelationshipwithCustomer?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input type="number" className="form-control" {...register("guarantorMobileNumber", guarantorMobileNumberValidation)} />
        <div className="text-danger">{errors.guarantorMobileNumber?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Aadhar Card Number</label>
        <input type="number" className="form-control" {...register("guarantorAdharCardNo",guarantorAdharCardNoValidation)} />
        <div className="text-danger">{errors.guarantorAdharCardNo?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Mortgage Details</label>
        <textarea className="form-control" {...register("guarantorMortgageDetails",guarantorMortgageDetailsValidation)} />
        <div className="text-danger">{errors.guarantorMortgageDetails?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Job Details</label>
        <textarea className="form-control" {...register("guarantorJobDetails",guarantorJobDetailsValidation)} />
        <div className="text-danger">{errors.guarantorJobDetails?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Local Address</label>
        <textarea className="form-control" {...register("guarantorLoaclAddress",guarantorLoaclAddressValidation)} />
        <div className="text-danger">{errors.guarantorLoaclAddress?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Permanent Address</label>
        <textarea className="form-control" {...register("guarantorPermanentAddress",guarantorPermanentAddressValidation)} />
        <div className="text-danger">{errors.guarantorPermanentAddress?.message}</div>
      </div>
    </div>
  );
}
