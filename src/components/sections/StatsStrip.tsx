import { useInView } from '../../hooks/useInView';

const stats = [
  { value: '6', label: 'signature bowls' },
  { value: '48g', label: 'max protein in a single bowl' },
  { value: '18 min', label: 'average prep-to-dispatch flow' },
  { value: '4.8', label: 'repeat-order rating' },
];

export function StatsStrip() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section id="stats" className="stats-section">
      <div ref={ref} className={`stats-grid ${isInView ? 'is-visible' : ''}`}>
        {stats.map((stat, index) => (
          <article
            key={stat.label}
            className="stat-card"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
