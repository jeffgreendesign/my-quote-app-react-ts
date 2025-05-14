import React from "react";
import useQuoteStore from "../stores/quoteStore";

const QuoteDisplay: React.FC = () => {
  const { quote, isLoading, error } = useQuoteStore();

  if (isLoading) {
    return (
      <div className="quote-container loading">
        <p>Loading a new quote...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote-container error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="quote-container">
        <p>Click the button below to get a random quote!</p>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <blockquote>
        <p className="quote-text">{quote.quote}</p>
        <footer className="quote-author">— {quote.author}</footer>
      </blockquote>
      {quote.category && (
        <div className="quote-tags">
          <span className="tag">{quote.category}</span>
        </div>
      )}
    </div>
  );
};

export default QuoteDisplay;
