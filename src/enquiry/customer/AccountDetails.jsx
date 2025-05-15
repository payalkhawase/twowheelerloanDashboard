import React from 'react';

const AccountDetails = ({ nextStep, prevStep, handleChange, values }) => {
    return (
    <div class="container mt-5">

        <div className="mb-4">
            <h4>Account Details</h4>

            <div className="mb-3">
                <label className="form-label">Account Type</label>
                <input
                    type="text"
                    className="form-control"
                    value={values.data.acdetails.accountType}
                    onChange={(e) => handleChange("data.acdetails", "accountType", e)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Bank Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={values.data.acdetails.bankName}
                    onChange={(e) => handleChange("data.acdetails", "bankName", e)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">IFSC Code</label>
                <input
                    type="text"
                    className="form-control"
                    value={values.data.acdetails.ifscCode}
                    onChange={(e) => handleChange("data.acdetails", "ifscCode", e)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Account Balance</label>
                <input
                    type="number"
                    className="form-control"
                    value={values.data.acdetails.accountBalanceValidation}
                    onChange={(e) => handleChange("data.acdetails", "accountBalanceValidation", e)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Account Holder Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={values.data.acdetails.accountHolderNameValidation}
                    onChange={(e) => handleChange("data.acdetails", "accountHolderNameValidation", e)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Account Status</label>
                <input
                    type="text"
                    className="form-control"
                    value={values.data.acdetails.accountStatus}
                    onChange={(e) => handleChange("data.acdetails", "accountStatus", e)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Account Number</label>
                <input
                    type="number"
                    className="form-control"
                    value={values.data.acdetails.accountNumber}
                    onChange={(e) => handleChange("data.acdetails", "accountNumber", e)}
                />
            </div>

            <button onClick={prevStep} className="btn btn-secondary me-2">Back</button>
            <button onClick={nextStep} className="btn btn-primary">Next</button>
        </div>
        </div>
    );
};

export default AccountDetails;
