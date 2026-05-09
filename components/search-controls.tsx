import type { SortDirection } from "@/components/word-search";

type SearchControlsProps = {
  placeholder: string;
  query: string;
  setQuery: (query: string) => void;
  setSortDirection: (sortDirection: SortDirection) => void;
  sortDirection: SortDirection;
};

export function SearchControls({
  placeholder,
  query,
  setQuery,
  setSortDirection,
  sortDirection,
}: SearchControlsProps) {
  return (
    <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
      <label className="grid gap-1">
        <span className="text-xs font-medium text-stone-700">Търсене</span>
        <input
          className="h-9 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          type="search"
          value={query}
        />
      </label>

      <div className="grid gap-1">
        <p className="text-xs font-medium text-stone-700">Подредба</p>
        <div className="grid h-9 grid-cols-2 rounded-md border border-stone-300 bg-white p-0.5 sm:w-28">
          <button
            aria-pressed={sortDirection === "asc"}
            className="rounded-sm px-2 text-xs font-medium text-stone-600 transition hover:text-stone-950 aria-pressed:bg-stone-900 aria-pressed:text-white"
            onClick={() => setSortDirection("asc")}
            type="button"
          >
            А-Я
          </button>
          <button
            aria-pressed={sortDirection === "desc"}
            className="rounded-sm px-2 text-xs font-medium text-stone-600 transition hover:text-stone-950 aria-pressed:bg-stone-900 aria-pressed:text-white"
            onClick={() => setSortDirection("desc")}
            type="button"
          >
            Я-А
          </button>
        </div>
      </div>
    </div>
  );
}
