import { useState } from 'react';
import type { Bowl } from '../../types/bowl';

interface BowlCardProps {
  bowl: Bowl;
  index: number;
  visible: boolean;
}

export function BowlCard({ bowl, index, visible }: BowlCardProps) {
  const [isOrdering, setIsOrdering] = useState(false);

  const handleOrder = () => {
    if (isOrdering) return;
    setIsOrdering(true);
    window.setTimeout(() => setIsOrdering(false), 1400);
  };

  return (
    <article
      className={`bowl-card ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bowl-image-wrap">
        <img className="bowl-image" src={bowl.image} alt={bowl.name} />
      </div>
      <div className="bowl-content">
        <div className="bowl-head">
          <div>
            <h3>{bowl.name}</h3>
            <div className="macro-pills">
              {bowl.macros.map((macro) => (
                <span key={macro.label} className="macro-pill">
                  {macro.value}
                  {macro.suffix} {macro.label}
                </span>
              ))}
            </div>
          </div>
          <span className="price-pill">Rs. {bowl.price}</span>
        </div>
        <p className="bowl-description">{bowl.description}</p>
        <div className="bowl-footer">
          <div className="tag-row">
            {bowl.tags.map((tag) => (
              <span key={tag} className="simple-tag">
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            className={`order-button ${isOrdering ? 'is-ordering' : ''}`}
            onClick={handleOrder}
          >
            <span>{isOrdering ? 'Opening…' : 'Order on Zomato'}</span>
            <svg
              className="order-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 5h5v5" />
              <path d="M10 14 19 5" />
              <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
