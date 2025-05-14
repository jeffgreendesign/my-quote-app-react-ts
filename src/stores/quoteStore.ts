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
      const response = await axios.get<Quote[]>(
        "https://api.api-ninjas.com/v1/quotes",
        {
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
          },
        }
      );
      set({ quote: response.data[0], isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },
}));

export default useQuoteStore;
