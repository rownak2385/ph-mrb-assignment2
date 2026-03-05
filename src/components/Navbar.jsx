import { useState } from 'react';

export default function Navbar() {
  // Controls mobile dropdown visibility.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <h1 className="brand">CS — Ticket System</h1>

      <button
        type="button"
        className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-actions ${menuOpen ? 'open' : ''}`}>
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>
        </nav>

        <button className="new-ticket-btn" type="button">
          <span aria-hidden="true">+</span>
          <span>New Ticket</span>
        </button>
      </div>
    </header>
  );
}
