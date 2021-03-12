import React, { useState } from 'react';
/**
 * Input with a button, that only accept numbers
 * @param {string} setQuantity - Title of the Modal
 * @param {string} defaultValue - Content of the Modal
 *
 */
const QuantitySelector = ({ setQuantity, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const handleSetValue = (e) => {
    const onlyNumbers = e.target.validity.valid ? e.target.value : value;
    setValue(onlyNumbers);
  };
  const handleSetQuantity = () => {
    if (value === '') {
      setValue(defaultValue);
    }
    setQuantity(value);
  };

  return (
    <div className="flex justify-center m-5">
      <div className="relative w-64">
        <input
          onChange={handleSetValue}
          pattern="^[0-9]{0,2}$"
          value={value}
          type="text"
          className="w-full border h-14 pl-5 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Number of Tasks"
        />
        <div className="absolute top-2 right-2">
          <button
            onClick={handleSetQuantity}
            className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Get
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
