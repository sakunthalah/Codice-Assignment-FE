import React from 'react';
import SignIn from './modules/signin/SignIn';
import SearchProject from './modules/project/SearchProject';
import MpsDashboard from './modules/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/search-project" element={<SearchProject />} />
        <Route path="/dashboard" element={<MpsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
