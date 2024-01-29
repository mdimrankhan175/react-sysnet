// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ownership from './components/Ownership';
import Meeting from './components/Meeting';
import EmployeeSection from './components/EmployeeSection';
import Server from './components/Server';
import ContactUs from './components/ContactUs';
import FollowUs from './components/FollowUs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ownership" element={<Ownership />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/emp_section" element={<EmployeeSection />} />
          <Route path="/server" element={<Server />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/follow_us" element={<FollowUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
