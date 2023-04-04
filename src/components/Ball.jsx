import { string } from 'prop-types';
import React from 'react';

function Ball({ addedStyle }) {
  return (
    <div className={`absolute rounded-full ${addedStyle}`} />
  );
}

export default Ball;
Ball.propTypes = {
  addedStyle: string.isRequired,
};
