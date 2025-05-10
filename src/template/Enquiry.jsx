// import React,{useState} from 'react'
// import {useForm,FormProvider} from "react-hook-form"
// import PersonalDetails from './Enquiry/PersonalDetails'
// import AddressDetails from './Enquiry/AddressDetails'
// import AccountDetails from './Enquiry/AccountDetails'


// const steps=[PersonalDetails,AddressDetails,AccountDetails];


import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { firstNameValidation,lastNameValidation,
  addressvalidation,agevalidation,
  emailIdValidation,
  mobileNumberValidation,
  alternatemobileNumberValidation,
  pancardValidation,
  adharcardValidation,
  passwordValidation} from './Enquiry/EnquiryValidation';

  export default function Enquiry()
  {
    const{register,handleSubmit,reset,setValue, formState:{errors}}=useForm();
    const[enquiries,setEnquiries]=useState([]);

     const fetchEnquiries=async (data)=>
     {
       try {
         const response =  await axios.get("http://lenovo:9191/enq/enquiry",data);
         
         setEnquiries(response.data);
       } catch (error) {
         alert('Error fetching enquiries');
       }
     };

     

     useEffect(() => {
       fetchEnquiries(); // Load all on initial mount
     }, []);

     const onSubmit = async (data) => {
      // Log data to check format
      console.log("Data to be submitted:", data);
    
      try {
        const response = await axios.post("http://lenovo:9191/enq/add", data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        alert('Enquiry submitted successfully!');
        reset();
        fetchEnquiries();
      } catch (error) {
        console.error("Submission failed:", error.response?.data || error.message);
        alert('Error submitting enquiry. See console for details.');
      }
    };
    
    

    function deleteEnquiry(id) {
      confirm("Want to delete record with id " + id)
      {
          axios.delete("http://lenovo:9191/enq/delete/" + id)
              .then(response =>{console.log(response.data);
  
                  fetchEnquiries()
              }
              )
              .catch(error => console.log(error.message))
      }
  
  }
  const onReset = () => {
    reset();
  };

  return (
    <div>
      <h1>Enquiry Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <p>{errors.firstName && errors.firstName.message}</p>
          Enter firstName:
          <input {...register('firstname',firstNameValidation)} placeholder="First Name" type="text" className="input" />
        </div>
        <p>{errors.lastName && errors.lastName.message}</p>
        Enter lastname:
        <input {...register('lastName',lastNameValidation)} placeholder="Last Name" className="input" />
        <p>{errors.address && errors.address.message}</p>
        Enter Address:
        <input {...register('address',addressvalidation)} placeholder="Address" type="text" className="input" />
        <p>{errors.city && errors.city.message}</p>
        Enter City:
        <input {...register('city',addressvalidation)} placeholder="City" type="text" className="input" />
        <p>{errors.age && errors.age.message}</p>
        Enter Age:
        <input {...register('age',agevalidation)} placeholder="Age" type="number" className="input" />
        <p>{errors.email && errors.email.message}</p>
        Enter Email:
        <input {...register('email', emailIdValidation)} placeholder="Email" type="text" className="input" />
        <p>{errors.mobileNo && errors.mobileNo.message}</p>
        Enter Mobile No:
        <input {...register('mobileNo' ,mobileNumberValidation)} placeholder="Mobile No" type="text" className="input" />
        <p>{errors.alternatemobileNo && errors.alternatemobileNo.message}</p>
        Enter Alternate Mobile No:
        <input {...register('alternateMobno',alternatemobileNumberValidation)} placeholder="Alternate Mobile No" type="text" className="input" />
        <p>{errors.pancardNo && errors.pancardNo.message}</p>
        Enter pancard No:
        <input {...register('pancardNo', pancardValidation)} placeholder="PAN Card No" type="text" className="input" />
        <p>{errors.password && errors.password.message}</p>
        Enter Password:
        <input {...register('password',passwordValidation )} placeholder="Password" type="text" className="input" />
        <p>{errors.adharcardNo && errors.adharcardNo.message}</p>
        Enter Adharcard No:
        <input {...register('adharcardNo',adharcardValidation)} placeholder="Aadhar Card No" type="text" className="input" />
         <br/><br/>
        <button type="submit" className="button">Submit</button>&nbsp;&nbsp;
        <button type="reset" onClick={onReset} className="button">Reset</button>
      </form>

      </div>



  );

    }
  
