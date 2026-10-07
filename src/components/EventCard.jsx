import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  const date = new Date(event.startDate).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <Link
      to={`/events/${event.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1 hover:border-accent"
    >
      <div className="overflow-hidden">
        <img src={event.banner} alt={event.title} className="h-40 w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-2">
          <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-medium capitalize text-accent">{event.category}</span>
          <span className="rounded-full bg-line px-3 py-0.5 text-xs capitalize">{event.mode}</span>
        </div>
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm text-muted">📅 {date} · 👥 Team {event.teamSize}</p>
        <div className="flex flex-wrap gap-2 text-xs text-muted">
          {event.tags.map((t) => <span key={t}>#{t}</span>)}
        </div>
        <div className="mt-1 flex items-center justify-between border-t border-line pt-3">
          <span className="font-semibold">🏆 {event.prize}</span>
          <span className="text-sm font-semibold text-accent">View →</span>
        </div>
      </div>
    </Link>
  );
}