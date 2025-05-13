
// export const customerIdValidation = {
//     required: "Customer ID is required",
//     valueAsNumber: true,
//     min: { value: 1, message: "Customer ID must be greater than 0" }
//   };
  
  export const customerNameValidation = {
    required: "Customer Name is required",
    minLength: { value: 3, message: "Customer Name must be at least 3 characters" }
  };
  
  export const dobValidation = {
    required: "Date of Birth is required"
  };
  
  export const ageValidation = {
    required: "Age is required",
    min: { value: 18, message: "Must be at least 18 years old" },
    max: { value: 100, message: "Age must be less than 100" }
  };
  
  export const genderValidation = {
    required: "Gender is required"
  };
  
  export const mobileValidation = {
    required: "Mobile Number is required",
    pattern: {
      value: /^[6-9]\d{9}$/,
      message: "Enter a valid 10-digit mobile number"
    }
  };
  
  export const additionalMobileValidation = {
    pattern: {
      value: /^[6-9]\d{9}$/,
      message: "Enter a valid 10-digit mobile number"
    }
  };
  
  export const bikeAmountValidation = {
    required: "Amount Paid for Bike is required",
    min: { value: 0, message: "Amount cannot be negative" }
  };
  
  // export const loanAmountValidation = {
  //   required: "Total Loan Required is required",
  //   min: { value: 1, message: "Loan amount must be greater than 0" }
  // };
  
  export const emailValidation = {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email"
    }
  };
  
  export const passwordValidation = {
    required: "Password is required",
    minLength: { value: 6, message: "Password must be at least 6 characters" }
  };
  
  export const onRoadPriceValidation = {
    required: "On-road price is required",
    min: { value: 0, message: "On-road price cannot be negative" }
  };
  
  export const tenureValidation = {
    required: "Tenure is required",
    min: { value: 1, message: "Tenure must be at least 1 month" }
  };
  