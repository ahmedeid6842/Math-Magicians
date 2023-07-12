import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import QuoteDisplay from './pages/Quote';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Math-Magicians/" element={<Home />} />
          <Route path="/Math-Magicians/home" element={<Home />} />
          <Route path="/Math-Magicians/calculator" element={<Calculator />} />
          <Route path="/Math-Magicians/quote" element={<QuoteDisplay />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
