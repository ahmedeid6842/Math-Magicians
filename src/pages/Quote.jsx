import React, { useState, useEffect } from 'react';
import '../styles/quote.css';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'iDDvCQo0LKEpbqij2tQVfQ==RjXITIayz77mSrAs',
            },
          },
        );
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchQuote();
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
      <p className="quote-body">
        &ldquo;
        <i>{quote}</i>
        &rdquo; -
        {' '}
        {author}
      </p>
    </div>
  );
}

export default QuoteDisplay;
