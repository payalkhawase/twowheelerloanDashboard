
// export const accountIdValidation = {
//     required: "Account ID is required",
//     pattern: {
//       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//       message: "Enter a valid email as Account ID"
//     }
//   };
  
  export const accountTypeValidation = {
    required: "Account Type is required",
    minLength: { value: 3, message: "Must be at least 3 characters" }
  };
  
  export const bankNameValidation = {
    required: "Bank Name is required",
    minLength: { value: 3, message: "Must be at least 3 characters" }
  };
  
  export const ifscCodeValidation = {
    required: "IFSC Code is required",
    pattern: {
      value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
      message: "Enter a valid IFSC code (e.g. SBIN0001234)"
    }
  };
  
  export const accountBalanceValidation = {
    required: "Account Balance is required",
    valueAsNumber: true,
    min: { value: 0, message: "Balance cannot be negative" }
  };
  
  export const accountHolderNameValidation = {
    required: "Account Holder Name is required",
    minLength: { value: 3, message: "Must be at least 3 characters" }
  };
  
  export const accountStatusValidation = {
    required: "Account Status is required"
  };
  
  export const accountNumberValidation = {
    required: "Account Number is required",
    pattern: {
      value: /^\d{9,18}$/,
      message: "Enter a valid account number (9 to 18 digits)"
    }
  };
  