export interface Quote {
  quote: string;
  author: string;
  category?: string;
}

export interface QuoteStore {
  quote: Quote | null;
  isLoading: boolean;
  error: string | null;
  fetchRandomQuote: () => Promise<void>;
}
