import React from 'react';
import Login from '../components/Login';

function LoginPage() {
  return (
    <div className="w-10/12 min-h-[80vh] bg-[rgba(255,255,255,.1)] z-10 backdrop-blur-xl border-[rgba(255,255,255, .7)] px-14 py-12 relative">
      <Login />
    </div>
  );
}

export default LoginPage;
