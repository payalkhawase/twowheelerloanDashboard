import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PersonalDetails from './Customer/PersonalDetails';
import AddressDetails from './Customer/AddressDetails';
import AccountDetails from './Customer/AccountDetails';
import GuarantorDetails from './Customer/GuarantorDetails';
import DependentInformation from './Customer/DependentInformation';
import AllPersonalDocuments from './Customer/AllPersonalDocuments';


const steps = [PersonalDetails, AddressDetails, AccountDetails,GuarantorDetails,DependentInformation,AllPersonalDocuments];

function Customer() {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    console.log('Final data', data);
  };

  const CurrentStepComponent = steps[currentStep];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Customer Registration</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="border p-4 rounded shadow">
          <CurrentStepComponent />

          <div className="mt-4 d-flex justify-content-between">
            {currentStep > 0 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary ms-auto"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </button>
            ) : (
              <button type="submit" className="btn btn-success ms-auto">
                Submit
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default Customer;
