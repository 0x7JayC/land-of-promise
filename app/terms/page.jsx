import { Shell } from "../_components/Shell";

export const metadata = {
  title: "Terms of Service · Server | Land of Promise",
  description:
    "Server terms of service: what data we collect from your Minecraft profile and how we use it.",
};

export default function TermsPage() {
  return (
    <Shell>
      <span className="sp-tag">// LEGAL //</span>
      <h1 className="sp-h1">
        TERMS OF <span className="accent">SERVICE</span>
      </h1>
      <p className="sp-lead">
        Welcome to our server. To ensure you have a secure and enjoyable gaming
        experience, we need your consent to collect and process certain data
        from your Minecraft profile (UUID). This data lets us provide network
        functions and maintain security against hackers and rule violators.
      </p>

      <div className="sp-body">
        <h2 className="sp-h2">What we collect</h2>
        <div className="sp-card">
          <h4>IP ADDRESSES, LOGINS &amp; ACCESS LOGS</h4>
          <p>Used to monitor and manage server access.</p>
        </div>
        <div className="sp-card">
          <h4>GAME STATISTICS</h4>
          <p>Kills/Deaths and playing time, used to enhance your gaming experience.</p>
        </div>
        <div className="sp-card">
          <h4>GAME &amp; CHAT BEHAVIOR</h4>
          <p>In-game behavior and chat interactions, to ensure a positive and respectful environment for all players.</p>
        </div>
        <div className="sp-card">
          <h4>MEMBERSHIP INFORMATION</h4>
          <p>Clan memberships, settings, friendships established on the server, and any bans or mutes.</p>
        </div>
        <div className="sp-card">
          <h4>RANK DETAILS</h4>
          <p>Rank purchases and their expiry.</p>
        </div>
        <div className="sp-card">
          <h4>OPTIONAL SERVICES</h4>
          <p>Links to other optional services such as Discord.</p>
        </div>

        <h2 className="sp-h2">Your privacy</h2>
        <p>
          We take your data security seriously. Rest assured we do not sell
          your data to third parties. Your privacy and enjoyment of our server
          are our top priorities.
        </p>
        <p>Thank you for being part of our community.</p>
      </div>
    </Shell>
  );
}
