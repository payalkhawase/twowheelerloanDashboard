
import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export default function AddressDetails() {
  const { register, setValue, getValues, formState: { errors }, control } = useFormContext();
  const isSameAddress = useWatch({ name: 'sameAsLocal', control });

  // Copy local address to permanent address if checkbox is checked
  useEffect(() => {
    if (isSameAddress) {
      const fields = ['areaname', 'cityname', 'district', 'state', 'pincode', 'houseNumber', 'streetName'];
      fields.forEach(field => {
        setValue(`permanent_${field}`, getValues(`local_${field}`));
      });
    }
  }, [isSameAddress, setValue, getValues]);

  return (
    <div>
      <h4>Local Address</h4>
      {['areaname', 'cityname', 'district', 'state', 'pincode', 'houseNumber', 'streetName'].map((field) => (
        <div className="mb-3" key={field}>
          <label className="form-label">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
          <input type={field === 'pincode' || field === 'houseNumber' ? 'number' : 'text'}
            className="form-control"
            {...register(`local_${field}`)}
          />
          <div className="text-danger">{errors[`local_${field}`]?.message}</div>
        </div>
      ))}

      <div className="form-check mb-4">
        <input
          type="checkbox"
          className="form-check-input"
          {...register("sameAsLocal")}
          id="sameAsLocal"
        />
        <label className="form-check-label" htmlFor="sameAsLocal">
          Permanent address same as local
        </label>
      </div>

      <h4>Permanent Address</h4>
      {['areaname', 'cityname', 'district', 'state', 'pincode', 'houseNumber', 'streetName'].map((field) => (
        <div className="mb-3" key={field}>
          <label className="form-label">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
          <input type={field === 'pincode' || field === 'houseNumber' ? 'number' : 'text'}
            className="form-control"
            {...register(`permanent_${field}`)}
            disabled={isSameAddress}
          />
          <div className="text-danger">{errors[`permanent_${field}`]?.message}</div>
        </div>
      ))}
    </div>
  );
}
