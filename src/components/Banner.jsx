const stats = [
  {
    label: 'In-Progress',
    value: 0,
    className: 'card-progress'
  },
  {
    label: 'Resolved',
    value: 0,
    className: 'card-resolved'
  }
];

export default function Banner() {
  return (
    <section className="banner">
      {stats.map((item) => (
        <article key={item.label} className={`stat-card ${item.className}`}>
          <img src="/vector1.png" alt="" aria-hidden="true" className="stat-pattern pattern-left" />
          <img src="/vector1.png" alt="" aria-hidden="true" className="stat-pattern pattern-right" />
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </article>
      ))}
    </section>
  );
}
