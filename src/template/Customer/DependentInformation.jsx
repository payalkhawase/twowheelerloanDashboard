import React from 'react';
import { useFormContext } from 'react-hook-form';
import { dependentInformationValidation } from './DependentInformationValidation';

export default function DependentInformation() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h4>Dependent Information</h4>

      {/* <div className="mb-3">
        <label className="form-label">Dependent Info ID</label>
        <input type="number" className="form-control" {...register('dependentInfoId',dependentInformationValidation.dependentInfoId)} />
        <div className="text-danger">{errors.dependentInfoId?.message}</div>
      </div> */}

      <div className="mb-3">
        <label className="form-label">No. of Family Members</label>
        <input type="number" className="form-control" {...register('noOfFamilyMember',dependentInformationValidation.noOfFamilyMember)} />
        <div className="text-danger">{errors.noOfFamilyMember?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">No. of Children</label>
        <input type="number" className="form-control" {...register('noOfChild', dependentInformationValidation.noOfChild)} />
        <div className="text-danger">{errors.noOfChild?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Marital Status</label>
        <select className="form-control" {...register('maritalStatus',dependentInformationValidation.maritalStatus)}>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>
        <div className="text-danger">{errors.maritalStatus?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Dependent Member Names</label>
        <input type="text" className="form-control" {...register('dependentMember',dependentInformationValidation.dependentMember)} placeholder="Comma-separated names" />
        <div className="text-danger">{errors.dependentMember?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Family Income</label>
        <input type="number" step="0.01" className="form-control" {...register('familyIncome',dependentInformationValidation.familyIncome)} />
        <div className="text-danger">{errors.familyIncome?.message}</div>
      </div>
    </div>
  );
}
