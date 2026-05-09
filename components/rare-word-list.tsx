import type { Word } from "@/data/words";

type RareWordListProps = {
  words: Word[];
};

export function RareWordList({ words }: RareWordListProps) {
  if (words.length === 0) {
    return null;
  }

  return (
    <section className="grid gap-2">
      <h2 className="text-base font-semibold text-stone-950">
        Редки и необикновени думи
      </h2>
      <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
        <ol className="divide-y divide-stone-200">
          {words.map((word, index) => (
            <li
              className="grid gap-1 px-4 py-3"
              key={`${word.borrowed.join("-")}-${index}`}
            >
              <p className="break-words text-base font-semibold leading-6 text-stone-950">
                {word.borrowed.join(", ")}
              </p>
              {word.note ? (
                <p className="break-words text-sm leading-6 text-stone-600">
                  {word.note}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
