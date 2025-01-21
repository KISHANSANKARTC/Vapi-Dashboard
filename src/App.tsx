import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GraphsPage from './pages/GraphsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graphs" element={<GraphsPage />} />
      </Routes>
    </Router>
  );
}

export default App;