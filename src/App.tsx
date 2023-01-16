import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import Header from './components/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
