import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  
  customerNameValidation,
  dobValidation,
  ageValidation,
  genderValidation,
  mobileValidation,
  additionalMobileValidation,
  bikeAmountValidation,
  
  emailValidation,
  passwordValidation,
  onRoadPriceValidation,
  tenureValidation
} from './PersonDetailsValidation';

export default function PersonalDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4">
      <h4>Personal Details</h4>

      {/* <div className="mb-3">
        <label className="form-label">Customer ID</label>
        <input type="number" className="form-control" {...register('customerId',customerIdValidation)} />
        <div className="text-danger">{errors.customerId?.message}</div>
      </div> */}

      <div className="mb-3">
        <label className="form-label">Customer Name</label>
        <input type="text" className="form-control" {...register('customerName',customerNameValidation)} />
        <div className="text-danger">{errors.customerName?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input type="date" className="form-control" {...register('customerDateOfBirth',dobValidation)} />
        <div className="text-danger">{errors.customerDateOfBirth?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="number" className="form-control" {...register('customerAge',ageValidation)} />
        <div className="text-danger">{errors.customerAge?.message}</div>
      </div>

      <div className="mb-3 ">
        <label className="form-label d-block">Gender</label>
        <div className='form-control'>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            value="Male"
            {...register('customerGender',genderValidation)}
            id="genderMale"
          />
          <label className="form-check-label" htmlFor="genderMale">Male</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            value="Female"
            {...register('customerGender',genderValidation)}
            id="genderFemale"
          />
          <label className="form-check-label" htmlFor="genderFemale">Female</label>
        </div>

        <div className="text-danger">{errors.customerGender?.message}</div>
        </div>
      </div>



      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input type="text" className="form-control" {...register('customerMobileNumber',mobileValidation)} />
        <div className="text-danger">{errors.customerMobileNumber?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Additional Mobile Number</label>
        <input type="text" className="form-control" {...register('customerAdditionalMobileNumber',additionalMobileValidation)} />
        <div className="text-danger">{errors.customerAdditionalMobileNumber?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Amount Paid for Bike</label>
        <input type="number" className="form-control" {...register('customerAmountPaidForBike',bikeAmountValidation)} />
        <div className="text-danger">{errors.customerAmountPaidForBike?.message}</div>
      </div>

      {/* <div className="mb-3">
        <label className="form-label">Total Loan Required</label>
        <input type="number" className="form-control" {...register('customerTotalLoanRequired',loanAmountValidation)} />
        <div className="text-danger">{errors.customerTotalLoanRequired?.message}</div>
      </div> */}

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" {...register('customerEmail',emailValidation)} />
        <div className="text-danger">{errors.customerEmail?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" {...register('password',passwordValidation)} autoComplete="new-password" />
        <div className="text-danger">{errors.password?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Loan Status</label>
        <input type="text" className="form-control" {...register('loanStatus')} defaultValue="" readOnly />
      </div>

      <div className="mb-3">
        <label className="form-label">On-Road Price</label>
        <input type="number" className="form-control" {...register('onRoadPrice', onRoadPriceValidation)} />
        <div className="text-danger">{errors.onRoadPrice?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Required Tenure (months)</label>
        <input type="number" className="form-control" {...register('requiredTenure', tenureValidation)} />
        <div className="text-danger">{errors.requiredTenure?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Interest Type</label>
        <input type="text" className="form-control" {...register('interesType')} defaultValue="Compound Interest" readOnly />
      </div>
    </div>
  );
}


