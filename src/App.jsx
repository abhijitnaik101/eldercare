import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './components/HomePage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import FamilyDashboard from './components/Dashboard/FamilyDashboard';
import CareTakerDashboard from './components/Dashboard/CareTakerDashboard';
import SearchPage from './components/SearchPage';
import CareTakerSchedule from './components/CareTaker/CareTakerSchedule';
import CareTakerProfile from './components/CareTaker/CareTakerProfile';
import Messages from './components/Messaging/Messages';
import Notification from './components/Messaging/Notification';
import FamilyProfile from './components/Family/FamilyProfile';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<FamilyDashboard />} />
            <Route path="/caretaker-dashboard" element={<CareTakerDashboard />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/caretaker-schedule" element={<CareTakerSchedule />} />
            <Route path="/caretaker-profile" element={<CareTakerProfile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/family-profile" element={<FamilyProfile/>} />
          </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
