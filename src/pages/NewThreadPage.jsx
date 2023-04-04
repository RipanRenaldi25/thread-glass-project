import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputGroup from '../components/InputGroup';
import useInput from '../hooks/useInput';
import { asyncCreateThread } from '../state';

function NewThreadPage() {
  const [title, onTitleChange] = useInput();
  const [category, onCategoryChange] = useInput();
  const [body, onBodyChange] = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };
  return (
    <div className="w-full py-8 px-12">
      <h1 className="text-xl mb-4">Create a Discussion</h1>
      <form onSubmit={onSubmitHandler}>
        <InputGroup placeHolder="Title" name="title" onInputChange={onTitleChange} value={title} />
        <InputGroup placeHolder="Category" name="category" onInputChange={onCategoryChange} value={category} />
        <textarea type="text" className="px-4 py-2 w-full h-16 border bg-slate-700 p-1.5 placeholder:text-sm rounded-sm" name="body" onChange={onBodyChange} value={body} placeholder="body" />
        <button type="submit" className="block border w-full rounded-sm mt-3">Send</button>
      </form>
    </div>
  );
}

export default NewThreadPage;
