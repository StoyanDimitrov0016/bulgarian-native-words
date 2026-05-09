import { WordSearch } from "@/components/word-search";
import { words } from "@/data/words";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Родна Реч
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
            Опит да събера по-точни, по-родни или просто любопитни думи,
            които могат да стоят на мястото на навлезли английски и чужди
            изрази.
          </p>
        </header>

        <WordSearch words={words} />
      </section>
    </main>
  );
}
