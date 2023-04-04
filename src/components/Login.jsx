import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputGroup from './InputGroup';
import { asyncLoginUser } from '../state';

function Login() {
  const [inputValue, setInputValue] = useState({});
  const dispatch = useDispatch();
  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(asyncLoginUser(inputValue));
  }
  const onChangeInputHandler = ({ target }) => {
    const { name, value } = target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form className="bg-[rgba(255,255,255,.07)] sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12  mx-auto px-10 py-16 shadow-2xl shadow-[rgba(255,255,255,.1)] relative" onSubmit={onSubmitHandler}>
      <h1 className="text-center text-xl mb-4 font-semibold lg:text-2xl">Login Here</h1>
      <InputGroup label="Email" placeHolder="Email" type="text" name="email" onInputChange={onChangeInputHandler} />
      <InputGroup label="Password" type="password" placeHolder="******" name="password" onInputChange={onChangeInputHandler} />
      <div className="w-full bg-white text-black text-lg rounded-md lg:h-10 h-8 flex items-center justify-center mt-6 lg:mt-8">
        <button type="submit">
          <span className="font-bold text-md lg:text-xl">Log In</span>
        </button>
      </div>
      <div className="mt-3">
        <p className="text-sm">
          Doesn`t Have an Account?
          {' '}
          <Link to="/signup">
            <span className="text-red-500">Sign Up Now</span>
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
