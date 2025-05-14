// src/stores/quoteStore.js
import { create } from "zustand";
import axios from "axios";
import { Quote, QuoteStore } from "../types/quote";

const useQuoteStore = create<QuoteStore>((set) => ({
  quote: null,
  isLoading: false,
  error: null,

  fetchRandomQuote: async () => {
    set({ isLoading: true, error: null });
    try {
      // Use Netlify function in production, direct API in development
      const isProduction = import.meta.env.PROD;
      const endpoint = isProduction
        ? "/.netlify/functions/get-quote"
        : "https://api.api-ninjas.com/v1/quotes";

      console.log("Fetching quote from:", endpoint);

      const response = await axios.get<Quote | Quote[]>(endpoint, {
        headers: isProduction
          ? {} // No headers needed for Netlify function
          : {
              "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
            },
      });

      console.log("Response:", response.data);

      // Handle both direct API response and Netlify function response
      const quoteData = isProduction
        ? (response.data as Quote)
        : (response.data as Quote[])[0];

      if (!quoteData) {
        throw new Error("No quote data received");
      }

      set({ quote: quoteData, isLoading: false });
    } catch (error) {
      console.error("Error fetching quote:", error);
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },
}));

export default useQuoteStore;
