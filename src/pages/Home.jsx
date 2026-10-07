import { useState, useMemo } from 'react';
import { events, categories } from '../data/events';
import EventCard from '../components/EventCard';

export default function Home() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      events.filter(
        (e) =>
          (category === 'all' || e.category === category) &&
          e.title.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );

  return (
    <>
      <header className="relative overflow-hidden px-4 pb-10 pt-20 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <h1 className="relative text-4xl font-extrabold tracking-tight sm:text-6xl">
          Discover. <span className="text-accent">Compete.</span> Build.
        </h1>
        <p className="relative mx-auto mt-4 max-w-xl text-muted">
          Hackathons, competitions & workshops from campuses across India.
        </p>
        <input
          placeholder="Search events..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="relative mt-8 w-full max-w-lg rounded-xl border border-line bg-card px-5 py-3.5 outline-none transition focus:border-accent"
        />
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition ${
                c === category
                  ? 'border-accent bg-accent text-white'
                  : 'border-line bg-card text-muted hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
        {!filtered.length && <p className="py-16 text-center text-muted">Koi event nahi mila 😕</p>}
      </main>
    </>
  );
}