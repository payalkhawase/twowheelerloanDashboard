import React, { useState, useEffect } from "react";

const AddressDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const [sameAsLocal, setSameAsLocal] = useState(false);

  const [localValues, setLocalValues] = useState(values); // Using local state to handle form values

  // Update localValues when the props 'values' change
  useEffect(() => {
    setLocalValues(values);
  }, [values]);

  const handleSameAsLocalToggle = (checked) => {
    setSameAsLocal(checked);
    if (checked) {
      setLocalValues((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          custAddr: {
            ...prev.data.custAddr,
            laddr: { ...prev.data.custAddr.paddr }, // Copy permanent address to local address
          },
        },
      }));
    } else {
      setLocalValues((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          custAddr: {
            ...prev.data.custAddr,
            laddr: { areaname: "", cityname: "", district: "" }, // Clear local address if not same
          },
        },
      }));
    }
  };

  // Handle changes to input fields
  const handleInputChange = (addressType, field, e) => {
    const newValue = e.target.value;
    setLocalValues((prev) => {
      const updatedData = { ...prev.data };
      updatedData.custAddr[addressType][field] = newValue;
      return { ...prev, data: updatedData };
    });
    handleChange("data.custAddr", addressType, field, e);
  };

  return (
    <div className="container mt-5">
      <div>
        <h2>Address Details</h2>

        <h4>Permanent Address</h4>
        <div className="mb-3">
          <label htmlFor="paddrAreaname" className="form-label">
            Area Name
          </label>
          <input
            type="text"
            className="form-control"
            id="paddrAreaname"
            value={localValues.data.custAddr.paddr.areaname}
            onChange={(e) =>
              handleInputChange("paddr", "areaname", e)
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paddrCityname" className="form-label">
            City Name
          </label>
          <input
            type="text"
            className="form-control"
            id="paddrCityname"
            value={localValues.data.custAddr.paddr.cityname}
            onChange={(e) =>
              handleInputChange("paddr", "cityname", e)
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paddrDistrict" className="form-label">
            District
          </label>
          <input
            type="text"
            className="form-control"
            id="paddrDistrict"
            value={localValues.data.custAddr.paddr.district}
            onChange={(e) =>
              handleInputChange("paddr", "district", e)
            }
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="sameAsLocal"
            checked={sameAsLocal}
            onChange={(e) => handleSameAsLocalToggle(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="sameAsLocal">
            Permanent Address Same As Local Address?
          </label>
        </div>

        <h4>Local Address</h4>
        <div className="mb-3">
          <label htmlFor="laddrAreaname" className="form-label">
            Area Name
          </label>
          <input
            type="text"
            className="form-control"
            id="laddrAreaname"
            value={localValues.data.custAddr.laddr.areaname}
            onChange={(e) =>
              handleInputChange("laddr", "areaname", e)
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="laddrCityname" className="form-label">
            City Name
          </label>
          <input
            type="text"
            className="form-control"
            id="laddrCityname"
            value={localValues.data.custAddr.laddr.cityname}
            onChange={(e) =>
              handleInputChange("laddr", "cityname", e)
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="laddrDistrict" className="form-label">
            District
          </label>
          <input
            type="text"
            className="form-control"
            id="laddrDistrict"
            value={localValues.data.custAddr.laddr.district}
            onChange={(e) =>
              handleInputChange("laddr", "district", e)
            }
          />
        </div>

        <button onClick={prevStep} className="btn btn-secondary me-2">
          Back
        </button>
        <button onClick={nextStep} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default AddressDetails;
