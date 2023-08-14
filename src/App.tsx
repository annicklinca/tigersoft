import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Request from './components/pages/Request';
import Login from './components/pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Request" element={<Request/>} />
        <Route path="/Login" element={<Login/>} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
