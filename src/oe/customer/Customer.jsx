import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import Confirmation from "./Confirmation";
import DependentInformation from "./DependentInformation";
import AddressDetails from "./AddressDetails";
import PersonalDocuments from "./PersonalDocuments";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Customer = () => {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const enqId = location.state?.enqId;
  console.log(enqId);

  // const [enqValue, setEnqValue] = useState(null);



  function getEnquiryData()
  {
    axios.get("http://localhost:7777/enq/enquiry/"+enqId)
    .then(res=>{
      console.log(res.data);
        // setEnqValue(res.data);
        const enqValue = res.data;
        setFormData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        customerName: enqValue.firstname+" "+enqValue.lastName,
        customerAge : enqValue.age,
        customerMobileNumber : enqValue.mobileNo,
        customerAdditionalMobileNumber : enqValue.alternateMobno,
        customerEmail : enqValue.email,
        customerAdharCard : enqValue.adharcardNo,
        customerPanCard : enqValue.pancardNo,
        cibilId : enqValue.cibil.cibilId
      }
    }));
    })
    .catch(err => console.error(err))
  }

// const { firstname } = enqValue || {};

  useEffect(() => {
  if (enqId > 0) {
    getEnquiryData();

    
  
  }
}, []);
  // console.log(firstname);
  const [formData, setFormData] = useState(
    {
      data : 
      {
            customerName: '',
            acdetails : {
                accountType: "",
                bankName: "",
            },   
            cibilId : '',
            depInfo : {
                noOfFamilyMember : "",
                noOfChild : ""
            },
            custAddr : {
                paddr:{
                    areaname : ""
                },
                laddr:{
                    areaname : ""
                }
            }
    },
    addressProof : "",
    panCard : "",
    addharCard : "",
    photo : "",
    signature : "",
    bankCheque : "",
    salarySlips : "",
    IncomeTax : ""

        }
);

const handleFileChange = (key, event) => {
    const file = event.target.files[0];
    setFormData(prev => ({
      ...prev,
      [key]: file,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

const handleChange = (path, key, event) => {
  const value = event.target.value;

  if (path) {
    const paths = path.split('.');
    setFormData(prev => {
      const updated = { ...prev };
      let nested = updated;

      for (let i = 0; i < paths.length; i++) {
        const part = paths[i];

        // Ensure we copy the current level to avoid mutation
        nested[part] = { ...nested[part] };

        if (i === paths.length - 1) {
          nested[part][key] = value;
        } else {
          nested = nested[part];
        }
      }

      return updated;
    });
  } else {
    // Use 'key' here since there's no 'field' in the parameters
    setFormData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  }
};



  switch (step) {
    case 1:
      return (
        <PersonalDetails nextStep={nextStep} handleChange={handleChange} values={formData} />
      );
    case 2:
      return (
        <AccountDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />
      );
    case 3:
      return (
            <DependentInformation nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />
      );
    case 4:
      return (
            <AddressDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />
      );  
    case 5:
      return (
            <PersonalDocuments nextStep={nextStep} prevStep={prevStep}  handleFileChange={handleFileChange} values={formData} />
      );  
      
      case 6:
        return(
        <Confirmation prevStep={prevStep} values={formData} />
        )
    default:
      return <div>Error</div>;
  }
};

export default Customer;
