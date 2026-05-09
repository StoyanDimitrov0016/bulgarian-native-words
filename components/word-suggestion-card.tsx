const suggestionFormUrl = "https://forms.gle/88Dk6TDU7actdrrX7";

export function WordSuggestionCard() {
  return (
    <aside className="rounded-xl border border-border bg-parchment-card px-5 py-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold tracking-tight text-ink">
            Предложи дума
          </h2>
          <p className="mt-1 font-serif text-[15px] italic leading-relaxed text-ink-muted">
            Ако знаеш по-добра родна дума или рядък израз, изпрати предложение
            през кратката молба.
          </p>
        </div>
        <a
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg border border-forest-mid bg-forest-light px-4 font-sans text-sm font-semibold text-forest transition hover:border-forest hover:bg-forest-light/70"
          href={suggestionFormUrl}
          rel="noreferrer"
          target="_blank"
        >
          Отвори молбата
        </a>
      </div>
    </aside>
  );
}
