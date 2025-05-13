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


    axios.post("http://localhost:9194/apploan/addCustomer/252",submissionData, {
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
      <h2>Confirm Details</h2>
      <h3>Personal Details</h3>
      <p><strong>Name:</strong> {values.customerName}</p>
      <p><strong>Date Of Birth:</strong> {values.customerDateOfBirth}</p>
      <p><strong>Age:</strong> {values.customerAge}</p>
      <p><strong>Gender:</strong> {values.customerGender}</p>
      <p><strong>Email:</strong> {values.customerEmail}</p>
      <p><strong>Mobile Number:</strong> {values.customerMobileNumber}</p>
      <p><strong>Additional Mobile Number:</strong> {values.customerAdditionalMobileNumber}</p>
      <p><strong>Pan Card:</strong> {values.customerPanCard}</p>
      <p><strong>Adhar Card:</strong> {values.customerAdharCard}</p>
      <p><strong>Amount Paid For Bike:</strong> {values.customerAmountPaidForBike}</p>
      <p><strong>on Road Price:</strong> {values.onRoadPrice}</p>
      <p><strong>Amount Paid For Bike:</strong> {values.customerAmountPaidForBike}</p>

      <h3>Account Details</h3>
      <p><strong>Account Type:</strong> {values.data.acdetails.accountType}</p>
      <p><strong>Bank Name:</strong> {values.data.acdetails.bankName}</p>
      <p><strong>Account Balance:</strong> {values.data.acdetails.ifscCode}</p>
      <p><strong>Account Holder Name:</strong> {values.data.acdetails.ifscCode}</p>
      <p><strong>Account Status:</strong> {values.data.acdetails.ifscCode}</p>
      <p><strong>Account Name:</strong> {values.data.acdetails.ifscCode}</p>

      <h3>Dependant Information</h3>
      <p><strong>No. of family Members:</strong> {values.data.depInfo.noOfFamilyMember}</p>
      <p><strong>No of Children:</strong> {values.data.depInfo.noOfChild}</p>
      <p><strong>Marital Status:</strong> {values.data.depInfo.maritalStatus}</p>
      <p><strong>Dependant Member:</strong> {values.data.depInfo.dependentMember}</p>
      <p><strong>Family Income:</strong> {values.data.depInfo.familyIncome}</p>

      <h3>Address Details</h3>
      <h3>Permenent Address Details</h3>
      <p><strong>Area Name:</strong> {values.data.custAddr.paddr.areaname}</p>
      <p><strong>City Name:</strong> {values.data.custAddr.paddr.cityname}</p>
      <p><strong>District Name:</strong> {values.data.custAddr.paddr.district}</p>
      <p><strong>State Name:</strong> {values.data.custAddr.paddr.state}</p>
      <p><strong>Pincode:</strong> {values.data.custAddr.paddr.pincode}</p>
      <p><strong>House Number:</strong> {values.data.custAddr.paddr.houseNumber}</p>
      <p><strong>Street Name:</strong> {values.data.custAddr.paddr.streetName}</p>

      <h3>Local Address Details</h3>
      <p><strong>Area Name:</strong> {values.data.custAddr.laddr.areaname}</p>
      <p><strong>City Name:</strong> {values.data.custAddr.laddr.cityname}</p>
      <p><strong>District Name:</strong> {values.data.custAddr.laddr.district}</p>
      <p><strong>State Name:</strong> {values.data.custAddr.laddr.state}</p>
      <p><strong>Pincode:</strong> {values.data.custAddr.laddr.pincode}</p>
      <p><strong>House Number:</strong> {values.data.custAddr.laddr.houseNumber}</p>
      <p><strong>Street Name:</strong> {values.data.custAddr.laddr.streetName}</p>

      <h3>Personal Documents</h3>
      <p><strong>Address Proof:</strong> {values.addressProof?.name}</p>
      <p><strong>Pan Card:</strong> {values.panCard?.name}</p>
      <p><strong>Addhar Card:</strong> {values.addharCard?.name}</p>
      <p><strong>Photo:</strong> {values.photo?.name}</p>
      <p><strong>Signature:</strong> {values.signature?.name}</p>
      <p><strong>Salary Slips:</strong> {values.salarySlips?.name}</p>
      <p><strong>Income Tax:</strong> {values.IncomeTax?.name}</p>


      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;
