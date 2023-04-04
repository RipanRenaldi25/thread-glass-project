import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputGroup from './InputGroup';
import { asyncRegistUser } from '../state';

function Register() {
  const [inputValue, setInputValue] = useState({});
  const dispatch = useDispatch();
  const onChangeInputHandler = ({ target }) => {
    const { value, name } = target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };
  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(asyncRegistUser(inputValue));
    setInputValue({});
  }
  return (
    <form className="bg-[rgba(255,255,255,.07)] w-full lg:w-5/12 xl:w-5/12 md:w-7/12 mx-auto px-10 py-16 shadow-2xl shadow-[rgba(255,255,255,.1)]" onSubmit={onSubmitHandler}>
      <h1 className="text-center text-xl mb-5 font-semibold lg:text-2xl">Register</h1>
      <InputGroup name="name" label="Name" placeHolder="John Doe" type="text" onInputChange={onChangeInputHandler} value={inputValue.name || ''} />
      <InputGroup name="email" label="Email" placeHolder="Email" type="text" onInputChange={onChangeInputHandler} value={inputValue.email || ''} />
      <InputGroup name="password" label="Password" type="password" placeHolder="******" onInputChange={onChangeInputHandler} value={inputValue.password || ''} />
      <div className="w-full bg-white text-black text-lg rounded-md h-8 lg:h-10 flex items-center justify-center mt-5">
        <button type="submit">
          <span className="font-bold lg:text-xl">Register</span>
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm lg:text-lg">
          Already Have an Account?
          {' '}
          <Link to="/">
            <span className="text-red-500 md:ml-1">Login</span>
          </Link>
        </p>
      </div>
    </form>

  );
}

export default Register;
