export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <section className="footer-brand-col">
          <h5>CS — Ticket System</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </section>

        <section>
          <h6>Company</h6>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </section>

        <section>
          <h6>Services</h6>
          <ul>
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </section>

        <section>
          <h6>Information</h6>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </section>

        <section>
          <h6>Social Links</h6>
          <ul className="social-links">
            <li>
              <i className="fa-brands fa-x-twitter" aria-hidden="true" />
              <span>@CS — Ticket System</span>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              <span>@CS — Ticket System</span>
            </li>
            <li>
              <i className="fa-brands fa-facebook-f" aria-hidden="true" />
              <span>@CS — Ticket System</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <span>support@cst.com</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2026 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
}
