type SearchSuggestionsProps = {
  setQuery: (query: string) => void;
  suggestions: string[];
};

export function SearchSuggestions({
  setQuery,
  suggestions,
}: SearchSuggestionsProps) {
  if (suggestions.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-1.5">
      {suggestions.map((suggestion) => (
        <li key={suggestion}>
          <button
            onClick={() => setQuery(suggestion)}
            type="button"
            className="rounded-full border border-forest-mid bg-forest-light px-3 py-1 font-sans text-sm font-medium text-forest transition hover:border-forest hover:bg-forest-light/70 cursor-pointer"
          >
            {suggestion}
          </button>
        </li>
      ))}
    </ul>
  );
}
