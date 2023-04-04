import React from 'react';
import Register from '../components/Register';

function RegisterPage() {
  return (
    <div className="w-10/12 min-h-[80vh] xl:min-h-[70vh] bg-[rgba(255,255,255,.1)] z-10 backdrop-blur-xl border-[rgba(255,255,255, .7)] px-14 py-12 relative">
      <Register />
    </div>

  );
}

export default RegisterPage;
