import { Shell } from "../_components/Shell";

export const metadata = {
  title: "Builders Program | Land of Promise",
  description:
    "Start your own Minecraft ministry — a 12-month programme that turns your team into Digital Gaming Facilitators.",
};

export default function BuildersPage() {
  return (
    <Shell>
      <span className="sp-tag">// BUILDERS PROGRAM //</span>
      <h1 className="sp-h1">
        START YOUR OWN<br />
        <span className="green">MINECRAFT MINISTRY</span>
      </h1>
      <p className="sp-lead">
        12 Modules tailored to turn your team into Digital Gaming Facilitators.
      </p>

      <div className="sp-body">
        <h2 className="sp-h2">What is this all about?</h2>
        <p>
          Traditional youth work is built on a foundation of presence,
          mentorship, and creating safe spaces for discovery. These skills—honed
          over decades of church history—are more vital than ever, but the
          “space” where young people gather has changed.
        </p>
        <p>
          Land of Promise doesn’t replace the heart of a youth worker; we
          provide the digital skin to house it. Over 12 months, we translate
          the timeless art of pastoral care into the immersive world of
          Minecraft.
        </p>

        <h2 className="sp-h2">Who is this for?</h2>
        <h3 className="sp-h3">You don’t have to be a pastor!</h3>
        <p>
          So who can start a Minecraft Ministry? Almost anybody! You just need
          to have the following:
        </p>
        <ul>
          <li>
            <strong>A lead facilitator</strong> with a passion for Minecraft and
            discipling the next generation (the most important).
          </li>
          <li>
            <strong>2 other people</strong> to help lead and run sessions.
          </li>
          <li>
            <strong>A church or organisation</strong> willing to sponsor you and
            keep you accountable.
          </li>
          <li>
            <strong>A group of children</strong> or young people.
          </li>
        </ul>

        <h2 className="sp-h2">How does this work?</h2>
        <h3 className="sp-h3">Getting started</h3>
        <p>
          After you’ve signed up for an initial chat to run introductions and
          ensure that the Builders programme is right for you, you’ll be
          provided with an induction pack.
        </p>
        <p>
          Then, starting with a 4-hour intensive training, we walk you and your
          team through every step needed to start, build and grow a successful
          digital ministry using Minecraft.
        </p>
        <p>
          Across 12 months we run sessions to enable you to take each step, one
          at a time, with on-going support and guidance. By the end, you’ll
          have a well-equipped and supported digital ministry — and receive
          Official Land of Promise Certification.
        </p>

        <h2 className="sp-h2">The 12 Modules</h2>
        <div className="sp-modules">
          <div className="sp-card">
            <h4>MODULE 1 · THE FOUNDATION</h4>
            <p>
              4-hour intensive. The Heart (mission &amp; theology), the Strategy
              (safe spaces, parents, sustainability), and the Game Plan
              (starting small with pastoral approval).
            </p>
          </div>
          <div className="sp-card">
            <h4>MODULE 2 · SKILL BUILDING</h4>
            <p>
              Java Server training with monthly live classes on using games and
              stories to form fellowship.
            </p>
          </div>
          <div className="sp-card">
            <h4>MOD 3–5 · FOUNDATIONS &amp; SAFETY</h4>
            <p>
              The digital space is the “Wild West.” In-depth training on keeping
              children safe and locking down your Discord servers.
            </p>
          </div>
          <div className="sp-card">
            <h4>MOD 6–9 · BUILDING THE CONTENT</h4>
            <p>
              Minecraft &amp; The Bible — creating lessons that work hand-in-hand
              with gameplay. Includes 4 LOP lesson templates you can adapt.
            </p>
          </div>
          <div className="sp-card" style={{ gridColumn: "1 / -1" }}>
            <h4>MOD 10–12 · FAMILY EVENTS &amp; CERTIFICATION</h4>
            <p>
              Planning in-person Minecraft events, parental support guidance,
              and Official Land of Promise Certification on completion.
            </p>
          </div>
        </div>

        <h2 className="sp-h2">Sign up for a chat with us</h2>
        <p>Ready to take the first step? Reach out and we’ll be in touch.</p>
        <a
          href="https://landofpromiseofficial.xyz/contact-us/"
          target="_blank"
          rel="noopener"
          className="sp-cta"
        >
          GET IN TOUCH
        </a>
      </div>
    </Shell>
  );
}
