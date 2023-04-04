import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import Ball from './components/Ball';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import Dashboard from './components/Dashboard';
import DetailPage from './pages/DetailPage';
import NewThreadPage from './pages/NewThreadPage';
import LeaderBoardPage from './pages/LeaderBoardPage';

function App() {
  const { user } = useSelector((states) => states);
  return (
    <>
      <Loading />
      <div className="min-h-screen min-w-full bg-[#02080E] text-white box-border relative before:contents-[''] before:h-56 before:w-56 before:absolute before:bg-gradient-to-br before:from-indigo-400 before:to-[#64FFCC] before:rounded-full before:top-5 before:left-5 flex justify-center items-center after:contents-[''] after:absolute after:bottom-0 after:right-0 after:h-64 after:w-64 after:rounded-full after:bg-gradient-to-br after:from-indigo-300 after:to-purple-500 shadow-2xl">
        <Ball addedStyle="w-24 h-24 bg-red-500 right-2/3 bottom-20" />
        <Ball addedStyle="w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-300 right-5/12 top-40" />
        {user === null ? (
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
          </Routes>
        ) : (
          <main className="w-10/12 min-h-[80vh] bg-[rgba(255,255,255,.1)] z-20 backdrop-blur-xl border-[rgba(255,255,255, .7)] relative rounded-2xl flex overflow-hidden">
            <Dashboard />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/newthread" element={<NewThreadPage />} />
              <Route path="/leaderboard" element={<LeaderBoardPage />} />
            </Routes>
          </main>
        ) }
      </div>
    </>
  );
}

export default App;
