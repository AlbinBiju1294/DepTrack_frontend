import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard  from './pages/Dashboard/Dashboard';
import './variables.css'
import InitiateTransfer from './pages/InitiateTransfer/InitiateTransfer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/initiatetransfer' element={<InitiateTransfer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
