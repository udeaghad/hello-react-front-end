import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Messages from './components/Messages';

const App = () => (
  <>
    <h1>Home Page</h1>

    <NavLink to="/messages">Click to see messages</NavLink>

    <Routes>

      <Route path="/messages" element={<Messages />} />
    </Routes>
  </>
);

export default App;
