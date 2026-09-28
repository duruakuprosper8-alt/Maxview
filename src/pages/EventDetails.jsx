import { useParams, Link } from "react-router-dom";
import events from "../data/events.json";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((item) => String(item.id) === String(id));

  if (!event) {
    return (
      <div className="event-details">
        <h1>Event not found</h1>
        <Link to="/events">Go back to events</Link>
      </div>
    );
  }

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    event.location
  )}&z=13&output=embed`;

  return (
    <section className="event-details">
      <Link to="/events" className="event-back-link">
        Back to events
      </Link>

      <div className="event-details-header">
        <span className="event-city">{event.city}</span>
        <h1>{event.title}</h1>
        <p className="event-date">{event.date}</p>
      </div>

      {event.image ? (
        <img
          src={event.image}
          alt={event.title}
          className="event-details-image"
        />
      ) : (
        <div className="event-image-placeholder">
          No image available
        </div>
      )}

      <div className="event-details-content">
        <p>{event.description}</p>

        <div className="event-location">
          <h2>Location</h2>
          <p>{event.location}</p>
        </div>

        <div className="event-map">
          <iframe
            title={`Map showing ${event.location}`}
            src={mapUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        {event.ticketLink && (
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noreferrer"
            className="event-ticket-link"
          >
            Get Tickets
          </a>
        )}
      </div>
    </section>
  );
}

export default EventDetails;
