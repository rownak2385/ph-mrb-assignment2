export default function Banner({ inProgressCount, resolvedCount }) {
  const stats = [
    {
      label: 'In-Progress',
      value: inProgressCount,
      className: 'card-progress'
    },
    {
      label: 'Resolved',
      value: resolvedCount,
      className: 'card-resolved'
    }
  ];

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
