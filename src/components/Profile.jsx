/* eslint-disable react/require-default-props */
import { string } from 'prop-types';
import React from 'react';

function Avatar({ image, name, addedStyle }) {
  return (
    <div>
      <div className={`avatar w-20 h-20 overflow-hidden ${addedStyle}`}>
        <img src={image} alt="avatar" className="rounded-full" />
      </div>
      <h2 className="text-sm">{name}</h2>
    </div>
  );
}

export default Avatar;
Avatar.propTypes = {
  image: string,
  name: string,
  addedStyle: string,
};
