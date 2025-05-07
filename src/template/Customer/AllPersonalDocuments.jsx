import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function PersonalDocuments() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h4>Personal Documents</h4>

      {/* <div className="mb-3">
        <label className="form-label">Document ID</label>
        <input type="number" className="form-control" {...register('documentID')} />
        <div className="text-danger">{errors.documentID?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Document Type</label>
        <input type="text" className="form-control" {...register('documents')} />
        <div className="text-danger">{errors.documents?.message}</div>
      </div> */}

      {/* File Uploads */}
      <div className="mb-3">
        <label className="form-label">Address Proof</label>
        <input type="file" className="form-control" {...register('addressProof')} />
      </div>

      <div className="mb-3">
        <label className="form-label">PAN Card</label>
        <input type="file" className="form-control" {...register('panCard')} />
      </div>

      <div className="mb-3">
        <label className="form-label">Aadhar Card</label>
        <input type="file" className="form-control" {...register('addharCard')} />
      </div>

      <div className="mb-3">
        <label className="form-label">Photograph</label>
        <input type="file" className="form-control" {...register('photo')} />
      </div>

      <div className="mb-3">
        <label className="form-label">Signature</label>
        <input type="file" className="form-control" {...register('signature')} />
      </div>

      <div className="mb-3">
        <label className="form-label">Bank Cheque</label>
        <input type="file" className="form-control" {...register('bankCheque')} />
      </div>

      <div className="mb-3">
        <label className="form-label">Salary Slips</label>
        <input type="file" className="form-control" {...register('salarySlips')} />
      </div>

      <div className="mb-3">
        <label className="form-label">Income Tax Docs</label>
        <input type="file" className="form-control" {...register('IncomeTax')} />
      </div>
    </div>
  );
}
