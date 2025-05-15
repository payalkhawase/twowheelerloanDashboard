import axios from "axios";
import React from "react";

const Confirmation = ({ prevStep, values }) => {
  const handleSubmit = () => {
    // Here you could POST to a server
    alert("Form submitted!");
    console.log(values);

    // Make sure values is a FormData object
  const submissionData = new FormData();
  submissionData.append("data", JSON.stringify(values.data));
  submissionData.append("addressProof", values.addressProof);
  submissionData.append("panCard", values.panCard);
  submissionData.append("addharCard", values.addharCard);
  submissionData.append("photo", values.photo);
  submissionData.append("signature", values.signature);
  submissionData.append("bankCheque", values.bankCheque);
  submissionData.append("salarySlips", values.salarySlips);
  submissionData.append("IncomeTax", values.IncomeTax);

// const enqId = location.state?.enqId;
  // console.log(enqId);

    axios.post("http://localhost:9194/apploan/addCustomer/"+values.enqId,submissionData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
  })
    .then(
        res=>{
            console.log("-->"+res.data)
        }
    )
    .catch(console.error()
    )

  };

  return (

    <div>
   <div class="container mt-5">
  <h2 class="mb-4">Confirm Details</h2>
  
  <div class="card shadow-sm">
    <div class="card-body">
      <h4 class="card-title mb-3">Personal Details</h4>
      <div class="row">

      <div class="col-md-6 mb-2"><strong>Name:</strong> {values.data.customerName}</div>
        <div class="col-md-6 mb-2"><strong>Date Of Birth:</strong> {values.data.customerDateOfBirth}</div>
        <div class="col-md-6 mb-2"><strong>Age:</strong> {values.data.customerAge}</div>
        <div class="col-md-6 mb-2"><strong>Gender:</strong> {values.data.customerGender}</div>
        <div class="col-md-6 mb-2"><strong>Email:</strong> {values.data.customerEmail}</div>
        <div class="col-md-6 mb-2"><strong>Mobile Number:</strong> {values.data.customerMobileNumber}</div>
        <div class="col-md-6 mb-2"><strong>Additional Mobile Number:</strong> {values.data.customerAdditionalMobileNumber}</div>
        <div class="col-md-6 mb-2"><strong>Pan Card:</strong> {values.data.customerPanCard}</div>
        <div class="col-md-6 mb-2"><strong>Adhar Card:</strong> {values.data.customerAdharCard}</div>
        <div class="col-md-6 mb-2"><strong>Amount Paid For Bike:</strong> {values.data.customerAmountPaidForBike}</div>
        <div class="col-md-6 mb-2"><strong>On Road Price:</strong> {values.data.onRoadPrice}</div>
      </div>
      </div>
      </div>
      <div class="card shadow-sm">
    <div class="card-body">
      <h4 class="card-title mb-3">Account Details</h4>
      <div class="row">
      <div class="col-md-6 mb-2"><strong>Account Type:</strong> {values.data.acdetails.accountType}</div>
      <div class="col-md-6 mb-2"><strong>Bank Name:</strong> {values.data.acdetails.bankName}</div>
      <div class="col-md-6 mb-2"><strong>Account Balance:</strong> {values.data.acdetails.ifscCode}</div>
      <div class="col-md-6 mb-2"><strong>Account Holder Name:</strong> {values.data.acdetails.ifscCode}</div>
      <div class="col-md-6 mb-2"><strong>Account Status:</strong> {values.data.acdetails.ifscCode}</div>
      <div class="col-md-6 mb-2"><strong>Account Name:</strong> {values.data.acdetails.ifscCode}</div>
      </div>
      </div>
      </div>

      <div class="card shadow-sm">
    <div class="card-body">
      <h4 class="card-title mb-3">Dependant Information</h4>
      <div class="row">
      <div class="col-md-6 mb-2"><strong>No. of family Members:</strong> {values.data.depInfo.noOfFamilyMember}</div>
      <div class="col-md-6 mb-2"><strong>No of Children:</strong> {values.data.depInfo.noOfChild}</div>
      <div class="col-md-6 mb-2"><strong>Marital Status:</strong> {values.data.depInfo.maritalStatus}</div>
      <div class="col-md-6 mb-2"><strong>Dependant Member:</strong> {values.data.depInfo.dependentMember}</div>
      <div class="col-md-6 mb-2"><strong>Family Income:</strong> {values.data.depInfo.familyIncome}</div>
</div>
      </div>
      </div>
      <div class="card shadow-sm">
    <div class="card-body">
      <h4 class="card-title mb-3">Address Details</h4>
      <div class="row">
      <h5>Permenent Address Details</h5>
      <div class="col-md-6 mb-2"><strong>Area Name:</strong> {values.data.custAddr.paddr.areaname}</div>
      <div class="col-md-6 mb-2"><strong>City Name:</strong> {values.data.custAddr.paddr.cityname}</div>
      <div class="col-md-6 mb-2"><strong>District Name:</strong> {values.data.custAddr.paddr.district}</div>
      <div class="col-md-6 mb-2"><strong>State Name:</strong> {values.data.custAddr.paddr.state}</div>
      <div class="col-md-6 mb-2"><strong>Pincode:</strong> {values.data.custAddr.paddr.pincode}</div>
      <div class="col-md-6 mb-2"><strong>House Number:</strong> {values.data.custAddr.paddr.houseNumber}</div>
      <div class="col-md-6 mb-2"><strong>Street Name:</strong> {values.data.custAddr.paddr.streetName}</div>

      <h5>Local Address Details</h5>
      <div class="col-md-6 mb-2"><strong>Area Name:</strong> {values.data.custAddr.laddr.areaname}</div>
      <div class="col-md-6 mb-2"><strong>City Name:</strong> {values.data.custAddr.laddr.cityname}</div>
      <div class="col-md-6 mb-2"><strong>District Name:</strong> {values.data.custAddr.laddr.district}</div>
      <div class="col-md-6 mb-2"><strong>State Name:</strong> {values.data.custAddr.laddr.state}</div>
      <div class="col-md-6 mb-2"><strong>Pincode:</strong> {values.data.custAddr.laddr.pincode}</div>
      <div class="col-md-6 mb-2"><strong>House Number:</strong> {values.data.custAddr.laddr.houseNumber}</div>
      <div class="col-md-6 mb-2"><strong>Street Name:</strong> {values.data.custAddr.laddr.streetName}</div>
</div>
      </div>
      </div>
      <div class="card shadow-sm">
    <div class="card-body">
      <h4 class="card-title mb-3">Personal Documents</h4>
      <div class="row">
      <div class="col-md-6 mb-2"><strong>Address Proof:</strong> {values.addressProof?.name}</div>
      <div class="col-md-6 mb-2"><strong>Pan Card:</strong> {values.panCard?.name}</div>
      <div class="col-md-6 mb-2"><strong>Addhar Card:</strong> {values.addharCard?.name}</div>
      <div class="col-md-6 mb-2"><strong>Photo:</strong> {values.photo?.name}</div>
      <div class="col-md-6 mb-2"><strong>Signature:</strong> {values.signature?.name}</div>
      <div class="col-md-6 mb-2"><strong>Salary Slips:</strong> {values.salarySlips?.name}</div>
      <div class="col-md-6 mb-2"><strong>Income Tax:</strong> {values.IncomeTax?.name}</div>
</div>
      </div>
      </div>

      <button className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
      <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
    </div>
    </div>
  );
};

export default Confirmation;
