import React from 'react';
import { useFormContext } from 'react-hook-form';

const PersonalDetails = ({ nextStep, handleChange, values }) => {
//   const { register, getValues, formState: { errors } } = useFormContext();

  const handleNext = () => {
    const customerName = getValues('customerName');
    updateForm({ customerName });
    next();
  };

  return (
    <div class="container mt-5">
    <div className="mb-4">
      <h4>Personal Details</h4>

      <div className="mb-3">
        <label className="form-label">Customer Name</label>
        <input type="text" className="form-control" value={values.data.customerName}  onChange={(e) => handleChange("data", "customerName", e)} />
      </div>

        
      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input type="date" className="form-control" value={values.data.customerDateOfBirth}  onChange={(e) => handleChange("data", "customerDateOfBirth", e)}  />
        {/* <div className="text-danger">{errors.customerDateOfBirth?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="number" className="form-control" value={values.data.customerAge}  onChange={(e) => handleChange("data", "customerAge", e)}/>
        {/* <div className="text-danger">{errors.customerAge?.message}</div> */}
      </div>

        <div className="mb-3 ">
        <label className="form-label d-block">Gender</label>
        <div className='form-control'>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            value="Male" onChange={(e) => handleChange("data", "customerGender", e)}
            id="genderMale"
          />
          <label className="form-check-label" htmlFor="genderMale">Male</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            value="Female"
            onChange={(e) => handleChange("data", "customerGender", e)}
            id="genderFemale"
          />
          <label className="form-check-label" htmlFor="genderFemale">Female</label>
        </div>

        {/* <div className="text-danger">{errors.customerGender?.message}</div> */}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input type="text" className="form-control" value={values.data.customerMobileNumber}  onChange={(e) => handleChange("data", "customerMobileNumber", e)}/>
        {/* // <div className="text-danger">{errors.customerMobileNumber?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Additional Mobile Number</label>
        <input type="text" className="form-control" value={values.data.customerAdditionalMobileNumber}  onChange={(e) => handleChange("data", "customerAdditionalMobileNumber", e)} />
        {/* <div className="text-danger">{errors.customerAdditionalMobileNumber?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Amount Paid for Bike</label>
        <input type="number" className="form-control" value={values.data.customerAmountPaidForBike}  onChange={(e) => handleChange("data", "customerAmountPaidForBike", e)} />
        {/* <div className="text-danger">{errors.customerAmountPaidForBike?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={values.data.customerEmail}  onChange={(e) => handleChange("data", "customerEmail", e)} />
        {/* <div className="text-danger">{errors.customerEmail?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Adhar Card</label>
        <input type="text" className="form-control" value={values.data.customerAdharCard}  onChange={(e) => handleChange("data", "customerAdharCard", e)} />
        {/* <div className="text-danger">{errors.customerEmail?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Pan Card</label>
        <input type="text" className="form-control" value={values.data.customerPanCard}  onChange={(e) => handleChange("data", "customerPanCard", e)} />
        {/* <div className="text-danger">{errors.customerEmail?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">On-Road Price</label>
        <input type="number" className="form-control" value={values.data.onRoadPrice}  onChange={(e) => handleChange("data", "onRoadPrice", e)}  />
        {/* <div className="text-danger">{errors.onRoadPrice?.message}</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Required Tenure (months)</label>
        <input type="number" className="form-control" value={values.data.requiredTenure}  onChange={(e) => handleChange("data", "requiredTenure", e)}  />
        {/* <div className="text-danger">{errors.requiredTenure?.message}</div> */}
      </div>

      <input type="hidden" className="form-control" value={values.data.cibilId}  onChange={(e) => handleChange("data", "cibilId", e)}  />

      {/* <div className="mb-3">
        <label className="form-label">Interest Type</label>
        <input type="text" className="form-control" {...register('interesType')} defaultValue="Compound Interest" readOnly />
      </div> */}
      <button type="button" class="btn btn-primary me-2" onClick={nextStep}>Next</button>
    </div></div>
  );
};

export default PersonalDetails;
