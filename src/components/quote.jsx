import React, { useState, useEffect } from 'react';
import './quote.css';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setQuote('This is my quote');
    setIsLoading(false);
    if (false) {
      setError('an error occured');
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h2 className="quote-title">Quote of the day:</h2>
      <p className="quote-body">{quote}</p>
    </div>
  );
}

export default QuoteDisplay;
