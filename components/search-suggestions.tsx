type SearchSuggestionsProps = {
  setQuery: (query: string) => void;
  suggestions: string[];
};

export function SearchSuggestions({
  setQuery,
  suggestions,
}: SearchSuggestionsProps) {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-1.5">
      {suggestions.map((suggestion) => (
        <li key={suggestion}>
          <button
            className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-sm text-stone-700 transition hover:border-stone-300 hover:bg-stone-100"
            onClick={() => setQuery(suggestion)}
            type="button"
          >
            {suggestion}
          </button>
        </li>
      ))}
    </ul>
  );
}
