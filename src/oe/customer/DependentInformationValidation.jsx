export const dependentInformationValidation = {
    // dependentInfoId: {
    //   required: 'Dependent Info ID is required',
    // },
    noOfFamilyMember: {
      required: 'Number of family members is required',
      min: {
        value: 1, 
        message: 'At least one family member is required',
      },
    },
    noOfChild: {
      required: 'Number of children is required',
      min: {
        value: 0,
        message: 'Number of children cannot be negative',
      },
    },
    maritalStatus: {
      required: 'Marital status is required',
    },
    dependentMember: {
      required: 'Dependent member names are required',
    },
    familyIncome: {
      required: 'Family income is required',
      min: {
        value: 0,
        message: 'Income cannot be negative',
      },
    },
  };
  