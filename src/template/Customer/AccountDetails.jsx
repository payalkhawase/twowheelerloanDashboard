import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  
  accountTypeValidation,
  bankNameValidation,
  ifscCodeValidation,
  accountBalanceValidation,
  accountHolderNameValidation,
  accountStatusValidation,
  accountNumberValidation
} from './AccountDetailsValidation';
export default function AccountDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4">
      <h4>Account Details</h4>
      {/* <div className="mb-3">                                                              
        <label className="form-label">AccountId</label>
        <input type="number" className="form-control" {...register('accountId',accountIdValidation)} />
        <div className="text-danger">{errors.accountId?.message}</div>
      </div> */}
      <div className="mb-3">
        <label className="form-label">Account Type</label>
        <input type="text" className="form-control" {...register('accountType',accountTypeValidation)} />
        <div className="text-danger">{errors.accountType?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Bank Name</label>
        <input type="text" className="form-control" {...register('bankName',bankNameValidation)} />
        <div className="text-danger">{errors.bankName?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">IFSC code</label>
        <input type="text" className="form-control" {...register('ifscCode',ifscCodeValidation)} />
        <div className="text-danger">{errors.ifscCode?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Account Balance</label>
        <input type="number" className="form-control" {...register('accountBalance',accountBalanceValidation)} />
        <div className="text-danger">{errors.accountBalance?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Account Holder Name</label>
        <input type="text" className="form-control" {...register('accountHolderName',accountHolderNameValidation)} />
        <div className="text-danger">{errors.accountHolderName?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Account Status</label>
        <input type="text" className="form-control" {...register('accountStatus',accountStatusValidation)} />
        <div className="text-danger">{errors.accountStatus?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Account Number</label>
        <input type="number" className="form-control" {...register('accountNumber',accountNumberValidation)} />
        <div className="text-danger">{errors.accountNumber?.message}</div>
      </div>
    </div>
  );
}

