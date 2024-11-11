import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Home /> }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
