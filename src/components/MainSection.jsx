function TicketCard({ ticket, onAddToTaskStatus }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onAddToTaskStatus(ticket);
    }
  };

  return (
    <article
      className="ticket-card"
      onClick={() => onAddToTaskStatus(ticket)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
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

export default function MainSection({ tickets, inProgressTickets, resolvedTickets, onAddToTaskStatus, onCompleteTask }) {
  return (
    <main className="main-grid">
      <section>
        <h4 className="section-title">Customer Tickets</h4>
        <div className="tickets-grid">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} onAddToTaskStatus={onAddToTaskStatus} />
          ))}
        </div>
      </section>

      <aside className="task-status">
        <h4 className="section-title">Task Status</h4>
        {inProgressTickets.length === 0 && <p className="status-subtitle">Select a ticket to add to task status</p>}

        {inProgressTickets.length > 0 && (
          <div className="task-list">
            {inProgressTickets.map((ticket) => (
              <div key={ticket.id} className="task-list-item">
                <p>{ticket.title}</p>
                <button
                  type="button"
                  className="complete-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    onCompleteTask(ticket.id);
                  }}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="resolved-section">
          <h5 className="resolved-title">Resolved Tasks</h5>
          {resolvedTickets.length > 0 ? (
            <div className="resolved-list">
              {resolvedTickets.map((ticket) => (
                <p key={ticket.id} className="resolved-item">
                  {ticket.title}
                </p>
              ))}
            </div>
          ) : (
            <p className="resolved-subtitle">No resolved tasks yet.</p>
          )}
        </div>
      </aside>
    </main>
  );
}
