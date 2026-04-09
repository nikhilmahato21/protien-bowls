import { useState } from 'react';
import type { Bowl } from '../../types/bowl';

interface BowlCardProps {
  bowl: Bowl;
  index: number;
  visible: boolean;
}

export function BowlCard({ bowl, index, visible }: BowlCardProps) {
  const [imageMissing, setImageMissing] = useState(false);
  const hasOrderLink = Boolean(bowl.link);

  const macroPills = [
    { label: 'Protein', value: `${bowl.nutrition.protein}g` },
    { label: 'Carbs', value: `${bowl.nutrition.carbs}g` },
    { label: 'Fat', value: `${bowl.nutrition.fat}g` },
  ];

  const tags = [
    bowl.isRecommended ? 'Recommended' : undefined,
    bowl.category,
    bowl.type === 'veg' ? 'Veg' : 'Non-Veg',
    bowl.serving,
    `${bowl.nutrition.calories} kcal`,
  ].filter(Boolean) as string[];

  return (
    <article
      className={`bowl-card ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bowl-image-wrap">
        {imageMissing ? (
          <div className="bowl-image-fallback" aria-hidden="true">
            <span>{bowl.type === 'veg' ? 'Veg' : 'Protein'}</span>
          </div>
        ) : (
          <img
            className="bowl-image"
            src={bowl.image}
            alt={bowl.name}
            loading="lazy"
            decoding="async"
            onError={() => setImageMissing(true)}
          />
        )}
      </div>
      <div className="bowl-content">
        <div className="bowl-head">
          <div>
            <h3>{bowl.name}</h3>
            <div className="macro-pills" aria-label={`${bowl.name} macros`}>
              {macroPills.map((macro) => (
                <span key={macro.label} className="macro-pill">
                  {macro.value} {macro.label}
                </span>
              ))}
            </div>
          </div>
          <span className="price-pill">Rs. {bowl.price}</span>
        </div>

        <p className="bowl-description">{bowl.description}</p>

        <div className="bowl-footer">
          <div className="tag-row">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`simple-tag ${tag === 'Recommended' ? 'simple-tag-accent' : ''}`}
              >
                {tag}
              </span>
            ))}
          </div>
          {hasOrderLink ? (
            <a
              className="order-button"
              href={bowl.link}
              target="_blank"
              rel="noreferrer"
            >
              <span>Order on Zomato</span>
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
            </a>
          ) : (
            <button type="button" className="order-button" disabled>
              <span>Coming Soon</span>
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
          )}
        </div>
      </div>
    </article>
  );
}
