
export const firstNameValidation={
    required:{value:true,message:"FirstName is must...!"},
    minLength:{value:6,message:"FirstName is to short...!"},
    maxLength:{value:15,message:"FirstName is to large...!"},
    pattern:{value:/^[A-Za-z\s]+$/,message:"Special characters are not allowed"}
}

export const lastNameValidation={
    required:{value:true,message:"lastName is must...!"},
    minLength:{value:6,message:"lastName is to short...!"},
    maxLength:{value:10,message:"lastName is to large...!"},
    pattern:{value:/^[A-Za-z\s]+$/,message:"Special characters are not allowed"}
}

export const addressvalidation={
    required:{value:true,message:"Address is required...!"}
}
export const agevalidation={
    required:{value:true,message:"Age is required...!"},
    min:{value:18,message:"Age must be at least 18...!"},
    max:{value:60,message:"Age must be at most 60....!"}
}

export const emailIdValidation={
    required:{value:true,message:"Emailid is must...!"},
    minLength:{value:15,message:"Emailid is to short...!"},
    maxLength:{value:25,message:"Emailid is to large...!"}
}

export const mobileNumberValidation={
    required:{value:true,message:"contactNumber is must...!"},
    minLength:{value:8,message:"contactNumber is to short...!"},
    maxLength:{value:15,message:"contactNumber is to large...!"}
}


export const alternatemobileNumberValidation = {
    //required: { value: true, message: "alternateMobileno is required...!" },
    //minLength: { value: 10, message: "Alternate mobile must be at least 10...!" },
    //maxLength: { value: 15, message: "Alternate mobile must be less than or equal to 15...!" }
  }

export const pancardValidation =
{
    required:{value:true, message:"Pan is reuired"},
    pattern:{
        value:/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
        message:"Invalid Pan Format(e.g.,ABCDE1234F)",
    }
    
}
export const adharcardValidation={
    required:{value:true,message:"adhar is required.....!"},
    pattern:{value:/^\d{12}$/,message:"Adhar must be 12 digits"
    }
}
export const passwordValidation = {
    required: "Password is required",
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
    }
  };
  

