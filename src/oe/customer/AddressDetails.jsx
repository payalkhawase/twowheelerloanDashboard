import React from "react";

const AddressDetails = ({ nextStep, prevStep, handleChange, values }) => {
    return (
        <div>
            <h2>Step 2: Upload Document</h2>

            <h4>Permanent Address</h4>
            <div className="mb-3">
                <label htmlFor="paddrAreaname" className="form-label">Area Name</label>
                <input type="text" className="form-control" id="paddrAreaname" value={values.data.custAddr.paddr.areaname} onChange={(e) => handleChange("data.custAddr.paddr","areaname",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="paddrCityname" className="form-label">City Name</label>
                <input type="text" className="form-control" id="paddrCityname" 
                    value={values.data.custAddr.paddr.cityname} onChange={(e) => handleChange("data.custAddr.paddr","cityname",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="paddrDistrict" className="form-label">District</label>
                <input type="text" className="form-control" id="paddrDistrict" 
                    value={values.data.custAddr.paddr.district} onChange={(e) => handleChange("data.custAddr.paddr","district",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="paddrState" className="form-label">State</label>
                <input type="text" className="form-control" id="paddrState" 
                    value={values.data.custAddr.paddr.state} onChange={(e) => handleChange("data.custAddr.paddr","state",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="paddrPincode" className="form-label">Pincode</label>
                <input type="number" className="form-control" id="paddrPincode" 
                    value={values.data.custAddr.paddr.pincode} onChange={(e) => handleChange("data.custAddr.paddr","pincode",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="paddrHouseNumber" className="form-label">House Number</label>
                <input type="number" className="form-control" id="paddrHouseNumber" 
                    value={values.data.custAddr.paddr.houseNumber} onChange={(e) => handleChange("data.custAddr.paddr","houseNumber",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="paddrStreetName" className="form-label">Street Name</label>
                <input type="text" className="form-control" id="paddrStreetName" 
                    value={values.data.custAddr.paddr.streetName} onChange={(e) => handleChange("data.custAddr.paddr","streetName",e)} />
            </div>

            <h4>Local Address</h4>
            <div className="mb-3">
                <label htmlFor="laddrAreaname" className="form-label">Area Name</label>
                <input type="text" className="form-control" id="laddrAreaname" 
                    value={values.data.custAddr.laddr.areaname} onChange={(e) => handleChange("data.custAddr.laddr","areaname",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="laddrCityname" className="form-label">City Name</label>
                <input type="text" className="form-control" id="laddrCityname" 
                    value={values.data.custAddr.laddr.cityname} onChange={(e) => handleChange("data.custAddr.laddr","cityname",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="laddrDistrict" className="form-label">District</label>
                <input type="text" className="form-control" id="laddrDistrict" 
                    value={values.data.custAddr.laddr.district} onChange={(e) => handleChange("data.custAddr.laddr","district",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="laddrState" className="form-label">State</label>
                <input type="text" className="form-control" id="laddrState" 
                    value={values.data.custAddr.laddr.state} onChange={(e) => handleChange("data.custAddr.laddr","state",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="laddrPincode" className="form-label">Pincode</label>
                <input type="number" className="form-control" id="laddrPincode" 
                    value={values.data.custAddr.laddr.pincode} onChange={(e) => handleChange("data.custAddr.laddr","pincode",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="laddrHouseNumber" className="form-label">House Number</label>
                <input type="number" className="form-control" id="laddrHouseNumber" 
                    value={values.data.custAddr.laddr.houseNumber} onChange={(e) => handleChange("data.custAddr.laddr","houseNumber",e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="laddrStreetName" className="form-label">Street Name</label>
                <input type="text" className="form-control" id="laddrStreetName" 
                    value={values.data.custAddr.laddr.streetName} onChange={(e) => handleChange("data.custAddr.laddr","streetName",e)} />
            </div>

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default AddressDetails;
