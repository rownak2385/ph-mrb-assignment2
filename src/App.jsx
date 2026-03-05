import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import initialTickets from './data/tickets.json';

export default function App() {
  const [customerTickets] = useState(initialTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAddToTaskStatus = (ticket) => {
    const alreadyAdded = inProgressTickets.some((item) => item.id === ticket.id);
    if (alreadyAdded) {
      window.alert('This ticket is already in Task Status.');
      return;
    }

    setInProgressTickets((prev) => [...prev, ticket]);
    window.alert('Ticket added to Task Status.');
  };

  const handleCompleteTask = (ticketId) => {
    const ticketToResolve = inProgressTickets.find((ticket) => ticket.id === ticketId);
    if (!ticketToResolve) return;

    setInProgressTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    setResolvedTickets((prev) => [ticketToResolve, ...prev]);
    window.alert('Task marked as completed.');
  };

  return (
    <div className="page-shell">
      <div className="site-board">
        <Navbar />
        <div className="board-content">
          <Banner inProgressCount={inProgressTickets.length} resolvedCount={resolvedTickets.length} />
          <MainSection
            tickets={customerTickets}
            inProgressTickets={inProgressTickets}
            resolvedTickets={resolvedTickets}
            onAddToTaskStatus={handleAddToTaskStatus}
            onCompleteTask={handleCompleteTask}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
