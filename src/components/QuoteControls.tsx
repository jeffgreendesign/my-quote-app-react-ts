import React from "react";
import useQuoteStore from "../stores/quoteStore";

const QuoteControls: React.FC = () => {
  const { fetchRandomQuote, isLoading } = useQuoteStore();

  return (
    <div className="quote-controls">
      <button
        onClick={fetchRandomQuote}
        disabled={isLoading}
        className="fetch-button"
      >
        {isLoading ? "Loading..." : "Get New Quote"}
      </button>
    </div>
  );
};

export default QuoteControls;
