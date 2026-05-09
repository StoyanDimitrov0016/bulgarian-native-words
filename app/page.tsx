import { WordSearch } from "@/components/word-search";
import { words } from "@/data/words";

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment">
      <div className="h-[3px] bg-accent" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pt-5 pb-8 sm:px-6 sm:pt-6 sm:pb-10 lg:px-8 lg:pt-7 lg:pb-12">
        <header className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Родна Реч
          </h1>
          <div className="mt-3 mb-4 h-0.5 w-12 rounded bg-forest" />
          <p className="font-serif text-lg italic leading-relaxed text-ink-muted sm:text-xl">
            Опит да събера по-точни, по-родни или просто любопитни думи, които
            могат да стоят на мястото на навлезли английски и чужди изрази.
          </p>
        </header>

        <WordSearch words={words} />
      </section>

      <footer className="border-t border-border-light px-8 py-6 text-center font-sans text-[11px] uppercase tracking-widest text-ink-faint">
        <code className="rounded border border-border-light bg-parchment-card px-1.5 py-0.5 normal-case tracking-normal">
          {"<"}
          <a
            className="transition hover:text-ink"
            href="https://github.com/StoyanDimitrov0016/bulgarian-native-words"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          {" />"}
        </code>
      </footer>
    </main>
  );
}
