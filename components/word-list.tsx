import type { Word } from "@/data/words";

type WordListProps = {
  words: Word[];
};

export function WordList({ words }: WordListProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      <div className="hidden grid-cols-2 border-b border-stone-200 bg-stone-100/70 px-4 py-2 text-sm font-medium text-stone-600 md:grid">
        <p>Навлязла дума</p>
        <p>Родна дума</p>
      </div>

      <ol className="divide-y divide-stone-200">
        {words.map((word, index) => (
          <li
            className="grid min-w-0 gap-3 px-4 py-3 md:grid-cols-2 md:gap-6 md:py-3.5"
            key={`${word.borrowed.join("-")}-${index}`}
          >
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-500 md:hidden">
                Навлязла дума
              </p>
              <p className="mt-1 break-words text-base font-semibold leading-6 text-stone-950 md:mt-0">
                {word.borrowed.join(", ")}
              </p>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-500 md:hidden">
                Родна дума
              </p>
              {word.alternatives.length > 0 ? (
                <ul className="mt-1 flex flex-wrap gap-1.5 md:mt-0">
                  {word.alternatives.map((alternative) => (
                    <li
                      className="max-w-full break-words rounded-md bg-stone-100 px-2 py-1 text-sm font-medium leading-5 text-stone-800"
                      key={alternative}
                    >
                      {alternative}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-sm text-stone-500 md:mt-0">
                  Няма добавена алтернатива.
                </p>
              )}

              {word.status === "draft" ? (
                <span className="mt-2 inline-flex w-fit rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800">
                  за преглед
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
