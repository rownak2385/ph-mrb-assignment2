import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import initialTickets from './data/tickets.json';

export default function App() {
  const [customerTickets, setCustomerTickets] = useState(initialTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAddToTaskStatus = (ticket) => {
    const alreadyAdded = inProgressTickets.some((item) => item.id === ticket.id);
    if (alreadyAdded) {
      toast.warning('This ticket is already in Task Status.');
      return;
    }

    setInProgressTickets((prev) => [...prev, ticket]);
    toast.success('Ticket added to Task Status.');
  };

  const handleCompleteTask = (ticketId) => {
    const ticketToResolve = inProgressTickets.find((ticket) => ticket.id === ticketId);
    if (!ticketToResolve) return;

    setInProgressTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    setResolvedTickets((prev) => [ticketToResolve, ...prev]);
    setCustomerTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    toast.success('Task marked as completed.');
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
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar={false} newestOnTop closeOnClick />
    </div>
  );
}
