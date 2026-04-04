import { schoolConfig } from "../../config/schoolConfig";
import SectionHeader from "../ui/SectionHeader";
import EventCard from "../ui/EventCard";

export default function EventsList() {
  const { events } = schoolConfig;

  return (
    <div>
      <SectionHeader tag="Stay Updated" title="Upcoming Events" align="left" />
      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
