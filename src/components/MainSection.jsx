import tickets from '../data/tickets.json';

function TicketCard({ ticket }) {
  return (
    <article className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        <span className={`badge ${ticket.status === 'In Progress' ? 'badge-yellow' : 'badge-green'}`}>
          <span className="badge-dot" aria-hidden="true" />
          {ticket.status}
        </span>
      </div>

      <p className="ticket-desc">{ticket.description}</p>

      <div className="ticket-meta">
        <span className="ticket-id">#{ticket.id}</span>
        <span
          className={`ticket-priority ${
            ticket.priority === 'HIGH PRIORITY'
              ? 'priority-high'
              : ticket.priority === 'MEDIUM PRIORITY'
                ? 'priority-medium'
                : 'priority-low'
          }`}
        >
          {ticket.priority}
        </span>
        <span className="ticket-customer">{ticket.customer}</span>
        <i className="fa-solid fa-calendar-days ticket-date-icon" aria-hidden="true" />
        <span className="ticket-date">{ticket.createdAt}</span>
      </div>
    </article>
  );
}

export default function MainSection() {
  return (
    <main className="main-grid">
      <section>
        <h4 className="section-title">Customer Tickets</h4>
        <div className="tickets-grid">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </section>

      <aside className="task-status">
        <h4 className="section-title">Task Status</h4>
        <p className="status-subtitle">Select a ticket to add to task status</p>
        <h5 className="resolved-title">Resolved Task</h5>
        <p className="resolved-subtitle">No resolved tasks yet.</p>
      </aside>
    </main>
  );
}
