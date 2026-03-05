import { useState } from 'react';
import { ToastContainer, cssTransition, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import initialTickets from './data/tickets.json';

const slideFromLeft = cssTransition({
  enter: 'csz-toast-enter-left',
  exit: 'csz-toast-exit-left',
  appendPosition: false,
  collapse: true,
  collapseDuration: 220
});

export default function App() {
  // Source ticket pool shown in the "Customer Tickets" list.
  const [customerTickets, setCustomerTickets] = useState(initialTickets);
  // Tickets currently selected by the user and waiting for completion.
  const [inProgressTickets, setInProgressTickets] = useState([]);
  // Completed tickets shown under "Resolved Tasks".
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAddToTaskStatus = (ticket) => {
    // Prevent adding the same ticket multiple times to Task Status.
    const alreadyAdded = inProgressTickets.some((item) => item.id === ticket.id);
    if (alreadyAdded) {
      toast.warning('This ticket is already in Task Status.');
      return;
    }

    setInProgressTickets((prev) => [...prev, ticket]);
    toast.success('Ticket added to Task Status.');
  };

  const handleCompleteTask = (ticketId) => {
    // Find the target ticket first so we can move it between lists safely.
    const ticketToResolve = inProgressTickets.find((ticket) => ticket.id === ticketId);
    if (!ticketToResolve) return;

    // Step 4 completion flow:
    // 1) remove from in-progress
    // 2) add to resolved
    // 3) remove from customer list
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
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        className="csz-toast-wrap"
        toastClassName="csz-toast"
        bodyClassName="csz-toast-body"
        transition={slideFromLeft}
      />
    </div>
  );
}
