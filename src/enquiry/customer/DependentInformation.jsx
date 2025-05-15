import React from "react";

const DependentInformation = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div class="container mt-5">

    <div>
      <h2>Dependent Information</h2>

      {/* Example file input (if you decide to enable it later) */}
      {/* <input
        type="file"
        accept=".pdf,.doc,.docx,.png,.jpg"
        onChange={(e) => handleChange("data.depInfo", "document", e)}
      />
      {values.data.depInfo.document && <p>Selected File: {values.data.depInfo.document.name}</p>} */}

      <div className="mb-3">
        <label className="form-label">No. of Family Members</label>
        <input
          type="number"
          className="form-control"
          value={values.data.depInfo.noOfFamilyMember}
          onChange={(e) => handleChange("data.depInfo", "noOfFamilyMember", e)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">No. of Children</label>
        <input
          type="number"
          className="form-control"
          value={values.data.depInfo.noOfChild}
          onChange={(e) => handleChange("data.depInfo", "noOfChild", e)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Marital Status</label>
        <select
          className="form-control"
          value={values.data.depInfo.maritalStatus || ""}
          onChange={(e) => handleChange("data.depInfo", "maritalStatus", e)}
        >
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Dependent Member Names</label>
        <input
          type="text"
          className="form-control"
          value={values.data.depInfo.dependentMember || ""}
          onChange={(e) => handleChange("data.depInfo", "dependentMember", e)}
          placeholder="Comma-separated names"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Family Income</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          value={values.data.depInfo.familyIncome || ""}
          onChange={(e) => handleChange("data.depInfo", "familyIncome", e)}
        />
      </div>

      <button onClick={prevStep} className="btn btn-secondary me-2">Back</button>
            <button onClick={nextStep} className="btn btn-primary">Next</button>
    </div>
    </div>
  );
};

export default DependentInformation;
