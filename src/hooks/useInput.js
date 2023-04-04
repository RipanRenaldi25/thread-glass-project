import { string } from 'prop-types';
import { useState } from 'react';

function useInput() {
  const [inputField, setInputField] = useState('');
  const onInputChange = ({ target }) => {
    setInputField(target.value);
  };
  return [inputField, onInputChange];
}

export default useInput;
useInput.propTypes = {
  defaultValue: string,
};
