"use client";

import { useState } from "react";
import { RareWordList } from "@/components/rare-word-list";
import { WordList } from "@/components/word-list";
import type { Word } from "@/data/words";

type WordSearchProps = {
  words: Word[];
};

function matchesQuery(word: Word, query: string) {
  const normalizedQuery = query.trim().toLocaleLowerCase("bg");

  if (!normalizedQuery) {
    return true;
  }

  return [...word.borrowed, ...word.alternatives]
    .join(" ")
    .toLocaleLowerCase("bg")
    .includes(normalizedQuery);
}

export function WordSearch({ words }: WordSearchProps) {
  const [query, setQuery] = useState("");
  const filteredWords = words.filter((word) => matchesQuery(word, query));
  const alternativeWords = filteredWords.filter(
    (word) => word.category !== "rare",
  );
  const rareWords = filteredWords.filter((word) => word.category === "rare");

  return (
    <section className="grid gap-3">
      <div className="grid gap-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-stone-700">Търсене</span>
          <input
            className="h-11 w-full rounded-md border border-stone-300 bg-white px-3 text-base text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Дума или алтернатива"
            type="search"
            value={query}
          />
        </label>
        <p className="text-sm text-stone-500">
          {filteredWords.length} от {words.length} записа
        </p>
      </div>

      <WordList words={alternativeWords} />
      <RareWordList words={rareWords} />
    </section>
  );
}
