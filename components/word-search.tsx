"use client";

import { useEffect, useMemo, useState } from "react";
import { RareWordList } from "@/components/rare-word-list";
import { SearchControls } from "@/components/search-controls";
import { SearchSuggestions } from "@/components/search-suggestions";
import { WordList } from "@/components/word-list";
import type { SortDirection } from "@/data/sort-direction";
import type { Word } from "@/data/words";

type WordSearchProps = {
  words: Word[];
};

type PlaceholderState = {
  index: number;
  typedLength: number;
  ticks: number;
};

const typingSpeed = 84;
const rotationDelay = 2000;
const ticksBeforeRotation = Math.round(rotationDelay / typingSpeed);

function getSearchTerms(words: Word[]) {
  return Array.from(
    new Set(
      words
        .flatMap((word) => [...word.borrowed, ...word.alternatives])
        .filter(Boolean),
    ),
  );
}

function matchesQuery(word: Word, query: string) {
  const normalizedQuery = query.trim().toLocaleLowerCase("bg");
  if (!normalizedQuery) return true;
  return [...word.borrowed, ...word.alternatives]
    .join(" ")
    .toLocaleLowerCase("bg")
    .includes(normalizedQuery);
}

function compareWords(first: Word, second: Word, direction: SortDirection) {
  const result = first.borrowed[0].localeCompare(second.borrowed[0], "bg", {
    sensitivity: "base",
  });
  return direction === "asc" ? result : -result;
}

function getPlaceholderTerm(searchTerms: string[], index: number) {
  return searchTerms[index % searchTerms.length] ?? "дума";
}

export function WordSearch({ words }: WordSearchProps) {
  const [query, setQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [placeholder, setPlaceholder] = useState<PlaceholderState>({
    index: 0,
    typedLength: 0,
    ticks: 0,
  });

  const searchTerms = useMemo(() => getSearchTerms(words), [words]);
  const placeholderTerm = getPlaceholderTerm(searchTerms, placeholder.index);
  const typedPlaceholder = placeholderTerm.slice(0, placeholder.typedLength);
  const normalizedQuery = query.trim().toLocaleLowerCase("bg");

  const suggestions =
    normalizedQuery.length > 0
      ? searchTerms
          .filter((term) =>
            term.toLocaleLowerCase("bg").startsWith(normalizedQuery),
          )
          .slice(0, 6)
      : [];

  const filteredWords = words
    .filter((word) => matchesQuery(word, query))
    .toSorted((first, second) => compareWords(first, second, sortDirection));

  const alternativeWords = filteredWords.filter(
    (word) => word.category !== "rare",
  );
  const rareWords = filteredWords.filter((word) => word.category === "rare");

  useEffect(() => {
    const placeholderInterval = window.setInterval(() => {
      setPlaceholder((current) => {
        const currentTerm = getPlaceholderTerm(searchTerms, current.index);
        if (current.ticks >= ticksBeforeRotation) {
          return { index: current.index + 1, typedLength: 0, ticks: 0 };
        }
        return {
          ...current,
          typedLength: Math.min(current.typedLength + 1, currentTerm.length),
          ticks: current.ticks + 1,
        };
      });
    }, typingSpeed);

    return () => window.clearInterval(placeholderInterval);
  }, [searchTerms]);

  return (
    <section className="grid gap-4">
      <div className="grid gap-2">
        <SearchControls
          placeholder={typedPlaceholder}
          query={query}
          setQuery={setQuery}
          setSortDirection={setSortDirection}
          sortDirection={sortDirection}
        />
        <SearchSuggestions setQuery={setQuery} suggestions={suggestions} />
        <p className="font-sans text-sm text-ink-faint">
          {filteredWords.length} от {words.length} записа
        </p>
      </div>

      <WordList words={alternativeWords} />
      <RareWordList words={rareWords} />
    </section>
  );
}
