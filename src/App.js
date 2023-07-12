import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Calculator from './components/calculator';
import QuoteDisplay from './components/quote';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuoteDisplay />} />
      </Routes>
    </main>
  );
}

export default App;
