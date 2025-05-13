import React from "react";

const PersonalDocuments = ({ nextStep, prevStep, handleFileChange, values }) => {
  return (
    <div class="container mt-5">

    <div>
      <h2>Personal Documents</h2>

      {/* Example file input (if you decide to enable it later) */}
      {/* <input
        type="file"
        accept=".pdf,.doc,.docx,.png,.jpg"
        onChange={(e) => handleChange("depInfo", "document", e)}
      />
      {values.depInfo.document && <p>Selected File: {values.depInfo.document.name}</p>} */}

      <div className="mb-3">
        <label className="form-label">Address Proof</label>
        <input type="file" className="form-control" onChange={(e) => handleFileChange("addressProof", e)}   />
      </div>

      <div className="mb-3">
        <label className="form-label">PAN Card</label>
        <input type="file" className="form-control"  onChange={(e) => handleFileChange("panCard", e)}  />
      </div>

      <div className="mb-3">
        <label className="form-label">Aadhar Card</label>
        <input type="file" className="form-control" onChange={(e) => handleFileChange("addharCard", e)}  />
      </div>

      <div className="mb-3">
        <label className="form-label">Photograph</label>
        <input type="file" className="form-control"  onChange={(e) => handleFileChange("photo", e)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Signature</label>
        <input type="file" className="form-control"   onChange={(e) => handleFileChange("signature", e)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Bank Cheque</label>
        <input type="file" className="form-control" onChange={(e) => handleFileChange("bankCheque", e)}  />
      </div>

      <div className="mb-3">
        <label className="form-label">Salary Slips</label>
        <input type="file" className="form-control" onChange={(e) => handleFileChange("salarySlips", e)}  />
      </div>

      <div className="mb-3">
        <label className="form-label">Income Tax Docs</label>
        <input type="file" className="form-control" onChange={(e) => handleFileChange("IncomeTax", e)}  />
      </div>

      <button onClick={prevStep} className="btn btn-secondary me-2">Back</button>
            <button onClick={nextStep} className="btn btn-primary">Next</button>
    </div>
    </div>
  );
};

export default PersonalDocuments;
