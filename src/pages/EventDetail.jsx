import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';

const fmt = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const Section = ({ title, children }) => (
  <section className="mt-10">
    <h2 className="mb-4 text-xl font-bold">{title}</h2>
    {children}
  </section>
);

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
    <p className="mt-0.5 font-semibold">{value}</p>
  </div>
);

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="py-24 text-center text-muted">
        <p className="mb-4">Event nahi mila.</p>
        <Link to="/" className="text-accent">← Back</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-64 sm:h-80">
        <img src={event.banner} alt={event.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      <div className="mx-auto -mt-16 grid max-w-6xl gap-8 px-4 pb-16 lg:grid-cols-[1fr_340px]">
        <div className="relative">
          <div className="flex gap-2">
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium capitalize text-accent">{event.category}</span>
            <span className="rounded-full bg-line px-3 py-1 text-xs capitalize">{event.mode}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">{event.title}</h1>

          {event.description && (
            <Section title="About">
              <p className="leading-relaxed text-muted">{event.description}</p>
            </Section>
          )}

          {event.prizes && (
            <Section title="Prizes">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {event.prizes.map((p) => (
                  <div key={p.position} className="rounded-xl border border-line bg-card p-4">
                    <p className="text-sm text-muted">{p.position}</p>
                    <p className="mt-1 text-xl font-bold">{p.reward}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {event.timeline && (
            <Section title="Timeline">
              <ol className="ml-2 border-l-2 border-line">
                {event.timeline.map((t) => (
                  <li key={t.title} className="relative pb-6 pl-6 last:pb-0">
                    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
                    <p className="font-semibold">{t.title}</p>
                    <p className="text-sm text-muted">{fmt(t.date)}</p>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          {event.rules && (
            <Section title="Rules">
              <ul className="list-disc space-y-2 pl-5 text-muted marker:text-accent">
                {event.rules.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </Section>
          )}
        </div>

        <aside className="h-fit space-y-5 rounded-2xl border border-line bg-card p-6 lg:sticky lg:top-24">
          <Info label="Starts" value={fmt(event.startDate)} />
          <Info label="Registration deadline" value={event.regDeadline ? fmt(event.regDeadline) : 'TBA'} />
          <Info label="Location" value={event.location || 'Online'} />
          <Info label="Team size" value={event.teamSize} />
          <Info label="Prize pool" value={event.prize} />
          <button className="w-full rounded-xl bg-accent py-3 font-semibold text-white transition hover:opacity-90">
            Register Now
          </button>
        </aside>
      </div>
    </div>
  );
}