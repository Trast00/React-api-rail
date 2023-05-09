import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Messages from './components/Messages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  </div>
);

export default App;
