import { MenuGrid } from './components/sections/MenuGrid';
import { ZomatoLogo } from './components/ui/ZomatoLogo';

const zomatoUrl =
  'https://www.zomato.com/ncr/protein-bowls-sector-43-gurgaon';
const logoUrl =
  'https://res.cloudinary.com/dynbpb9u0/image/upload/v1775894226/protien/PB_Color_Logo_2_jgtoei.png';

function App() {
  return (
    <div className="app-shell" id="top">
      
      <header className="site-header ">
        <img className="brand-mark rounded-full object-cover scale-110 " src={logoUrl} alt="Protien Bowls logo" />
        <div className="brand-copy">
          <h1>Protien Bowls</h1>
          <p>Bowls, shakes, cakes and more, all in one place.</p>
        </div>
        <a
          className="header-badge"
          href={zomatoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Zomato"
        >
          <ZomatoLogo />
        </a>
      </header>
      <div className="top-decorations " aria-hidden="true">
        <svg viewBox="0 0 120 90" className="top-decoration deco-bowl">
          <ellipse cx="60" cy="70" rx="34" ry="8" className="art-shadow" />
          <path d="M28 45c0 20 14 30 32 30s32-10 32-30H28Z" className="art-line" />
          <path d="M33 40c2-14 14-23 27-23s25 9 27 23" className="art-line" />
          <ellipse cx="45" cy="38" rx="8" ry="5" className="art-line" />
          <ellipse cx="60" cy="33" rx="8" ry="5" className="art-line" />
          <ellipse cx="75" cy="39" rx="8" ry="5" className="art-line" />
        </svg>
        <svg viewBox="0 0 120 90" className="top-decoration deco-shake">
          <path d="M58 10h18" className="art-line" />
          <path d="M68 10v13" className="art-line" />
          <rect x="45" y="20" width="30" height="44" rx="10" className="art-line" />
          <path d="M51 20h18" className="art-line" />
          <path d="M53 34c5-4 9-4 14 0" className="art-line" />
          <path d="M51 46c6-3 12-3 18 0" className="art-line" />
        </svg>
        <svg viewBox="0 0 120 90" className="top-decoration deco-pancake">
          <ellipse cx="60" cy="67" rx="28" ry="8" className="art-line" />
          <ellipse cx="60" cy="57" rx="24" ry="7" className="art-line" />
          <ellipse cx="60" cy="47" rx="20" ry="6" className="art-line" />
          <path d="M71 34c0 6-5 10-11 10s-11-4-11-10c0-5 4-9 11-9s11 4 11 9Z" className="art-line" />
          <path d="M74 30c5 1 9 4 12 9" className="art-line" />
        </svg>
      </div>
      <main>
        <MenuGrid />
      </main>
      <footer className="site-footer">
        <a
          className="footer-zomato-button"
          href={zomatoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Find us on Zomato"
        >
          <span>Find us on Zomato</span>
          <span className="footer-zomato-logo">
            <ZomatoLogo />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default App;
