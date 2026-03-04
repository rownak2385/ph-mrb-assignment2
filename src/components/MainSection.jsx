const tickets = [
  {
    id: '#1001',
    title: 'Login Issue - Can not Access Account',
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    customer: 'John Smith',
    priority: 'HIGH PRIORITY',
    status: 'Open',
    createdAt: '1/15/2024'
  },
  {
    id: '#1002',
    title: 'Payment Failed - Card Declined',
    description: 'Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.',
    customer: 'Sarah Johnson',
    priority: 'HIGH PRIORITY',
    status: 'Open',
    createdAt: '1/16/2024'
  },
  {
    id: '#1003',
    title: 'Unable to Download Invoice',
    description: 'Customer can not download their January invoice from the billing section. The download button is...',
    customer: 'Michael Brown',
    priority: 'MEDIUM PRIORITY',
    status: 'In Progress',
    createdAt: '1/17/2024'
  },
  {
    id: '#1004',
    title: 'Incorrect Billing Address',
    description: "Customer's billing address shows a different city. They updated it but it still displays the old one.",
    customer: 'Emily Davis',
    priority: 'LOW PRIORITY',
    status: 'Open',
    createdAt: '1/18/2024'
  },
  {
    id: '#1005',
    title: 'App Crash on Launch',
    description: 'Customer reports that the mobile app crashes immediately upon opening on Android 13.',
    customer: 'David Wilson',
    priority: 'HIGH PRIORITY',
    status: 'Open',
    createdAt: '1/19/2024'
  },
  {
    id: '#1006',
    title: 'Refund Not Processed',
    description: 'Customer requested a refund two weeks ago but has not received the amount yet.',
    customer: 'Sophia Taylor',
    priority: 'MEDIUM PRIORITY',
    status: 'In Progress',
    createdAt: '1/20/2024'
  },
  {
    id: '#1007',
    title: 'Two-Factor Authentication Issue',
    description: 'Customer is not receiving 2FA codes on their registered phone number.',
    customer: 'James Anderson',
    priority: 'HIGH PRIORITY',
    status: 'Open',
    createdAt: '1/21/2024'
  },
  {
    id: '#1008',
    title: 'Unable to Update Profile Picture',
    description: "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    customer: 'Olivia Martinez',
    priority: 'LOW PRIORITY',
    status: 'Open',
    createdAt: '1/22/2024'
  },
  {
    id: '#1009',
    title: 'Subscription Auto-Renewal',
    description: 'Customer wants to enable auto-renewal for their subscription but the toggle is disabled.',
    customer: 'Liam Thomas',
    priority: 'MEDIUM PRIORITY',
    status: 'In Progress',
    createdAt: '1/17/2024'
  },
  {
    id: '#1010',
    title: 'Missing Order Confirmation Email',
    description: "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: 'Isabella Garcia',
    priority: 'MEDIUM PRIORITY',
    status: 'Open',
    createdAt: '1/24/2024'
  }
];

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
        <span className="ticket-id">{ticket.id}</span>
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
            <TicketCard key={ticket.title} ticket={ticket} />
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
