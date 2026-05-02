import "./subpage.css";

export function Shell({ children }) {
  return (
    <>
      <nav className="sp-nav">
        <a href="/" className="sp-nav-logo" aria-label="Land of Promise">
          <img src="/brand/logo.png" alt="Land of Promise" />
        </a>
        <ul className="sp-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/builders">Builders</a></li>
          <li><a href="/manners">Manners</a></li>
          <li><a href="/terms">Terms</a></li>
          <li>
            <a
              href="https://discord.gg/Y5NbJXCrRX"
              target="_blank"
              rel="noopener"
              className="sp-nav-cta"
            >
              JOIN DISCORD
            </a>
          </li>
        </ul>
      </nav>
      <main className="sp-main">{children}</main>
      <footer className="sp-footer">
        <img src="/brand/logo.png" alt="Land of Promise" />
        <p>LAND OF PROMISE 2025™ · A Project of Mehtaverse Community</p>
        <p>
          <a href="mailto:info@patrickbezalel.com">info@patrickbezalel.com</a>
        </p>
      </footer>
    </>
  );
}
