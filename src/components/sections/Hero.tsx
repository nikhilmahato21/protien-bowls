import { useEffect, useState } from 'react';

const words = ['Powerful', 'Delicious', 'Delivered'];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setIsVisible(true);
      }, 220);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-blobs" aria-hidden="true">
        <span className="blob blob-one" />
        <span className="blob blob-two" />
        <span className="blob blob-three" />
      </div>
      <div className="hero-content">
        <p className="eyebrow">Protein-first bowls for busy cities</p>
        <h1>
          Bowls that feel{' '}
          <span className={`hero-word ${isVisible ? 'is-visible' : ''}`}>
            {words[index]}
          </span>
        </h1>
        <p className="hero-description">
          Clean macros, loud flavors and delivery-ready meals designed for
          people who want comfort food that still tracks.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="primary-link">
            Explore Bowls
          </a>
          <a href="#stats" className="secondary-link">
            Why It Works
          </a>
        </div>
      </div>
      <a href="#stats" className="scroll-cue" aria-label="Scroll to stats">
        <span />
      </a>
    </section>
  );
}
