import { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AuthPage from './pages/AuthPage';

import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
