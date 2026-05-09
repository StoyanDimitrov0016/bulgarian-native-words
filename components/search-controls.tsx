import type { SortDirection } from "@/data/sort-direction";

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
    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
      <label className="grid gap-1.5">
        <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Търсене
        </span>
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-ink-faint"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="h-10 w-full rounded-lg border border-border bg-parchment-card pl-9 pr-3 font-serif text-[15px] text-ink placeholder:text-ink-faint focus:border-accent focus:ring-3 focus:ring-accent/15 focus:outline-none transition"
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            type="search"
            value={query}
          />
        </div>
      </label>

      <div className="grid gap-1.5">
        <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Подредба
        </p>
        <div className="grid h-10 w-28 grid-cols-2 gap-0.5 rounded-lg border border-border bg-parchment-card p-0.5">
          {(["asc", "desc"] as const).map((dir) => (
            <button
              key={dir}
              aria-pressed={sortDirection === dir}
              onClick={() => setSortDirection(dir)}
              type="button"
              className="rounded-md font-sans text-xs font-medium transition aria-pressed:bg-ink aria-pressed:text-parchment text-ink-muted hover:text-ink cursor-pointer"
            >
              {dir === "asc" ? "А-Я" : "Я-А"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
