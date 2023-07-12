import React from 'react';
import CalculatorComponent from '../components/calculator';
import '../styles/calculator.css';

const CalculatorPage = () => (
  <section className=" container calculator-container">
    <h2> Let&apos;s do some math ! </h2>
    <div className="calculator-component">
      <CalculatorComponent />
    </div>
  </section>
);

export default CalculatorPage;
