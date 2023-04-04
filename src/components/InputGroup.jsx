/* eslint-disable react/require-default-props */
import { func, string } from 'prop-types';
import React from 'react';

function InputGroup({
  label, type, placeHolder, onInputChange, name, value, addedStyle,
}) {
  return (
    <div className="input-group mb-4 lg:mb-7 lg:text-md">
      <label htmlFor={label}>
        <span>{label}</span>
        <input id={label} type={type} className={`bg-slate-700 block mt-2 w-full h-8 lg:h-10 rounded-md text-white px-4 ${addedStyle}`} placeholder={placeHolder} onChange={onInputChange} name={name} value={value} />
      </label>
    </div>
  );
}

export default InputGroup;
InputGroup.propTypes = {
  label: string,
  type: string,
  placeHolder: string.isRequired,
  onInputChange: func.isRequired,
  name: string.isRequired,
  value: string,
  addedStyle: string,
};
