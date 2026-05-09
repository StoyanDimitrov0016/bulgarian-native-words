import type { Word } from "@/data/words";

type RareWordListProps = {
  words: Word[];
};

export function RareWordList({ words }: RareWordListProps) {
  if (words.length === 0) return null;

  return (
    <section className="grid gap-3">
      <div className="flex items-center gap-2.5">
        <span className="font-display text-lg text-accent" aria-hidden="true">
          ✦
        </span>
        <h2 className="font-display text-lg font-semibold tracking-tight text-ink">
          Редки и необикновени думи
        </h2>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-parchment-card shadow-sm">
        <ol className="divide-y divide-border-light">
          {words.map((word, index) => (
            <li
              key={`${word.borrowed.join("-")}-${index}`}
              className="grid gap-1 px-5 py-3.5 transition hover:bg-border/10"
            >
              <p className="wrap-break-word font-serif text-[17px] font-semibold leading-snug text-ink">
                {word.borrowed.join(", ")}
              </p>
              {word.note && (
                <p className="wrap-break-word font-serif text-[15px] italic leading-relaxed text-ink-muted">
                  {word.note}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
