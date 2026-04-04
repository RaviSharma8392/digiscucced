export default function EventsList({ events = [], colors = {} }) {
  const primary = colors.primary || "#0f3460";
  const accent  = colors.accent  || "#e8a020";

  return (
    <div>
      <div className="mb-10">
        <div className="text-[11px] font-medium uppercase tracking-[1.5px] mb-2"
          style={{ color: accent }}>Stay Updated</div>
        <h2 className="font-heading text-[22px] font-semibold" style={{ color: primary }}>
          Upcoming Events
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <div key={event.id}
            className="flex gap-4 items-start p-4 bg-white border border-black/8 rounded-lg">
            {/* Date badge */}
            <div className="flex-shrink-0 w-12 text-center text-white rounded-md py-2 px-1"
              style={{ background: primary }}>
              <div className="font-heading text-[22px] font-bold leading-none">{event.day}</div>
              <div className="text-[10px] uppercase tracking-wide mt-0.5 opacity-80">{event.month}</div>
            </div>
            {/* Info */}
            <div>
              <h4 className="text-[13.5px] font-medium text-slate-800 mb-1">{event.title}</h4>
              <p className="text-[12px] text-slate-400">{event.detail}</p>
              <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded mt-1.5 ${event.tagColor}`}>
                {event.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
