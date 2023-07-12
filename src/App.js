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
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<QuoteDisplay />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
