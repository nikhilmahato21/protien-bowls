import { bowls } from '../../data/bowls';
import { useInView } from '../../hooks/useInView';
import { BowlCard } from './BowlCard';


export function MenuGrid() {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0,
    rootMargin: '0px 0px 160px 0px',
  });

  return (
    <section id="menu" className="menu-section">
      <div className="section-heading">
        <p className="section-kicker">Menu</p>
        <h2>Crave-worthy meals, built to hit your macros</h2>
      </div>
      <div ref={ref} className="menu-grid">
        {bowls.map((bowl, index) => (
          <BowlCard
            key={bowl.id}
            bowl={bowl}
            index={index}
            visible={isInView}
          />
        ))}
      </div>
    </section>
  );
}
