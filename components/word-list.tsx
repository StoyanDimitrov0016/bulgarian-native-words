import type { Word } from "@/data/words";

type WordListProps = {
  words: Word[];
};

export function WordList({ words }: WordListProps) {
  if (words.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-parchment-card shadow-sm">
      <div className="hidden grid-cols-2 border-b border-border-light bg-parchment-dark px-5 py-2 md:grid">
        {["Навлязла дума", "Родна дума"].map((label) => (
          <p
            key={label}
            className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink-muted"
          >
            {label}
          </p>
        ))}
      </div>

      <ol className="divide-y divide-border-light">
        {words.map((word, index) => (
          <li
            key={`${word.borrowed.join("-")}-${index}`}
            className="grid min-w-0 gap-3 px-5 py-3.5 transition hover:bg-border/10 md:grid-cols-2 md:gap-6"
          >
            <div className="min-w-0">
              <p className="mb-1 font-sans text-[10px] font-medium uppercase tracking-widest text-ink-faint md:hidden">
                Навлязла дума
              </p>
              <p className="wrap-break-word font-serif text-[17px] font-semibold leading-snug text-ink">
                {word.borrowed.join(", ")}
              </p>
            </div>

            <div className="min-w-0">
              <p className="mb-1 font-sans text-[10px] font-medium uppercase tracking-widest text-ink-faint md:hidden">
                Родна дума
              </p>

              {word.alternatives.length > 0 ? (
                <ul className="flex flex-wrap gap-1.5">
                  {word.alternatives.map((alt) => (
                    <li
                      key={alt}
                      className="max-w-full wrap-break-word rounded-md border border-forest-mid bg-forest-light px-2.5 py-1 font-sans text-sm font-medium text-forest"
                    >
                      {alt}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-serif text-sm italic text-ink-faint">
                  Няма добавена алтернатива.
                </p>
              )}

              {word.status === "draft" && (
                <span className="mt-2 inline-flex rounded-full border border-amber-border bg-amber-bg px-2.5 py-0.5 font-sans text-[11px] font-medium text-amber-ink">
                  за преглед
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
