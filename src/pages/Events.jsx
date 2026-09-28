// import events from "../data/events.json";
// import "./Events.css";

// function Events() {
//   return (
//     <section className="events-page">
//       <div className="events-header">
//         <h1>Events</h1>
//         <p>
//           Discover fandom events, conventions, showcases and
//           community experiences.
//         </p>
//       </div>

//       <div className="events-grid">
//         {events.map((event) => (
//           <article className="event-card" key={event.id}>
//             {event.image ? (
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="event-image"
//               />
//             ) : (
//               <div className="event-image-placeholder">
//                 No image available
//               </div>
//             )}

//             <div className="event-body">
//               <span className="event-category">
//                 {event.category}
//               </span>

//               <h2>{event.title}</h2>

//               <p>{event.description}</p>

//               <div className="event-meta">
//                 <span>{event.date}</span>
//                 <span>{event.location}</span>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Events;

// import events from "../data/events.json"
// import "./Events.css"
// import { useState } from "react"
// import { Link } from "react-router-dom"

// function Events() {
//   const [search, setSearch] = useState("")
//   const [city, setCity] = useState("All")

//   // get cities
//   let cities = ["All"]
//   for (let ev of events) {
//     if (ev.city && !cities.includes(ev.city)) {
//       cities.push(ev.city)
//     }
//   }

//   // filter
//   let filteredEvents = events.filter((ev) => {
//     let cityOk = city === "All" || ev.city === city
//     let searchOk = ev.title.toLowerCase().includes(search.toLowerCase())
//     return cityOk && searchOk
//   })

//   function saveEvent(ev) {
//     let saved = localStorage.getItem("bookmarked_events")
//     if (!saved) saved = "[]"
//     let arr = JSON.parse(saved)

//     let already = false
//     for (let item of arr) {
//       if (item.id === ev.id) already = true
//     }

//     if (!already) {
//       arr.push(ev)
//       localStorage.setItem("bookmarked_events", JSON.stringify(arr))
//       alert("Saved to bookmarks")
//     } else {
//       alert("Already saved")
//     }
//   }

//   return (
//     <section className="events-page">
//       <h1>Events</h1>
//       <p>Discover fandom events and community experiences.</p>

//       <input 
//         type="text" 
//         placeholder="Search event..." 
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
      
//       <select value={city} onChange={(e) => setCity(e.target.value)}>
//         {cities.map((c) => (
//           <option key={c} value={c}>{c}</option>
//         ))}
//       </select>

//       <div className="events-grid">
//         {filteredEvents.map((event) => (
//           <article className="event-card" key={event.id}>
//             {event.image ? (
//               <img src={event.image} alt={event.title} className="event-image" />
//             ) : (
//               <div className="event-image-placeholder">No image available</div>
//             )}

//             <div className="event-body">
//               <span className="event-category">{event.category}</span>
//               <h2>{event.title}</h2>
//               <p>{event.city} - {event.date}</p>
//               <p>{event.location}</p>

//               <Link to={`/events/${event.id}`}>View Details</Link>
//               <button onClick={() => saveEvent(event)}>Bookmark</button>
//               {event.ticketLink && <a href={event.ticketLink} target="_blank" rel="noreferrer">Ticket</a>}
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Events


import { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "Lagos Comic Con 2026",
    date: "2026-09-12",
    city: "Lagos",
    location: "Landmark Event Centre, Victoria Island, Lagos",
    category: "Comics",
    desc: "Africa's biggest pop-culture con - comics, anime, games, films, cosplay",
    ticket: "https://lagoscomiccon.com",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800"
  },
  {
    id: 2,
    title: "AniWeCon 2026: Beyond Fury",
    date: "2026-08-15",
    city: "Lagos",
    location: "Paradise Event Arena, Yaba, Lagos",
    category: "Anime",
    desc: "Anime screenings, cosplay, gaming tournaments and creative workshops",
    ticket: "https://aniwe.events",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
  },
  {
    id: 3,
    title: "Lagos Games Week 2026",
    date: "2026-06-18",
    city: "Lagos",
    location: "National Theatre, Lagos",
    category: "Gaming",
    desc: "Gaming trade fair - developers, investors, Game Jam, Next Gen Summit",
    ticket: "https://lagosgamesweek.com",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"
  },
  {
    id: 4,
    title: "AnimeCon Africa 2027",
    date: "2027-07-16",
    city: "Lagos",
    location: "Landmark Centre, Lagos",
    category: "Anime",
    desc: "3-day anime con - cosplay, manga swaps, AMV nights, artist alley",
    ticket: "https://animecon.africa",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b288f498?w=800"
  },
  {
    id: 5,
    title: "Africa Tech Festival 2026",
    date: "2026-11-17",
    city: "South Africa",
    location: "CTICC, Cape Town",
    category: "Technology",
    desc: "Major tech festival covering digital transformation and innovation",
    ticket: "https://africatechfestival.com",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
  },
  {
    id: 6,
    title: "Art of Technology Lagos 8.0",
    date: "2026-12-03",
    city: "Lagos",
    location: "Landmark Event Centre, VI, Lagos",
    category: "Technology",
    desc: "Tech adoption, ethics, governance - Beyond Smart Cities",
    ticket: "https://aotlagos.com",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
  },
  {
    id: 7,
    title: "AfroFutureTech iFest 2026",
    date: "2026-12-03",
    city: "Lagos",
    location: "Elegushi Beach, Lagos",
    category: "Gaming",
    desc: "4-day festival - tech, culture, capital and creativity",
    ticket: "",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
  },
  {
    id: 8,
    title: "NTAI - Night Time Anime Indulgence",
    date: "2026-10-31",
    city: "Lagos",
    location: "POP Landmark, Oniru Estate, VI",
    category: "Anime",
    desc: "Evening anime community event - from ₦7,500",
    ticket: "https://aniwe.events/ntai",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
  },
  {
    id: 9,
    title: "AnimeCon Africa - October Launch Mixer",
    date: "2026-10-31",
    city: "Lagos",
    location: "Lagos, Nigeria",
    category: "Anime",
    desc: "First monthly meetup leading into 2027 convention",
    ticket: "https://animecon.africa",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
  },
  {
    id: 10,
    title: "Africa Technology Expo 2026",
    date: "2026-06-26",
    city: "Lagos",
    location: "Wole Soyinka Centre, Lagos",
    category: "Technology",
    desc: "Tech expo connecting tech companies, investors and business leaders",
    ticket: "https://africatechexpo.com",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
  },
];

export default function Events() {
  const [filterCity, setFilterCity] = useState("All");
  const filtered = filterCity === "All" ? eventsData : eventsData.filter(e => e.city === filterCity);

  return (
    <div style={{padding:"20px", background:"#0f0f13", minHeight:"100vh", color:"white"}}>
      <h1>🎪 Upcoming Events</h1>
      <p style={{opacity:0.6}}>10 verified fandom events - Lagos focused</p>

      <div style={{margin:"15px 0", display:"flex", gap:"10px"}}>
        {["All","Lagos","South Africa"].map(c=>(
          <button key={c} onClick={()=>setFilterCity(c)} style={{padding:"6px 14px", borderRadius:"20px", border:"none", background: filterCity===c ? "#6c5ce7" : "#2d2d35", color:"white", cursor:"pointer"}}>{c}</button>
        ))}
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))", gap:"18px", marginTop:"20px"}}>
        {filtered.map(ev=>(
          <div key={ev.id} style={{background:"#1c1c22", borderRadius:"14px", overflow:"hidden"}}>
            <img src={ev.image} alt={ev.title} style={{width:"100%", height:"180px", objectFit:"cover"}} />
            <div style={{padding:"12px"}}>
              <span style={{fontSize:"10px", background:"#6c5ce7", padding:"3px 8px", borderRadius:"10px"}}>{ev.category}</span>
              <h3 style={{margin:"8px 0 4px"}}>{ev.title}</h3>
              <p style={{fontSize:"12px", opacity:0.6, margin:"0 0 6px"}}>{ev.date} • {ev.location}</p>
              <p style={{fontSize:"13px", opacity:0.8}}>{ev.desc}</p>
              {ev.ticket && <a href={ev.ticket} target="_blank" rel="noreferrer" style={{display:"inline-block", marginTop:"10px", background:"#6c5ce7", color:"white", padding:"6px 14px", borderRadius:"8px", textDecoration:"none", fontSize:"13px"}}>Get Ticket</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}