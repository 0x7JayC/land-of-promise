import { Shell } from "../_components/Shell";

export const metadata = {
  title: "LOP Manners Manifesto | Land of Promise",
  description: "Engagement rules for the Land of Promise Minecraft community.",
};

const RULES = [
  {
    title: "Be Kind and Respectful",
    body: "Treat others as you would like to be treated. Use kind words, be polite, and show respect to all players, regardless of their age, gender, or background. Every player is a precious creation of God.",
  },
  {
    title: "No Sabotaging",
    body: "Avoid intentional destruction or alteration of other players’ creations. We’re all here to enjoy building and exploring together — encourage and support one another. To collaborate, ask for permission and work as a team.",
  },
  {
    title: "No Non-Tactical Killing",
    body: "In the spirit of friendship and fairness, refrain from harming others without a valid reason. Engage in combat only during designated PvP zones or agreed-upon battles or events.",
  },
  {
    title: "No Malicious Behavior",
    body: "Cheating, hacking, or exploiting the game is strictly prohibited. If you encounter bugs or glitches, report them to server administrators or moderators rather than abusing them.",
  },
  {
    title: "Keep Language Clean",
    body: "Avoid swearing, offensive terms, or disrespectful comments. Words have the power to impact others — let’s make sure ours are uplifting and positive.",
  },
  {
    title: "Respect Personal Space",
    body: "Each player’s space is their own. Do not enter or modify someone else’s buildings, chests, or belongings without permission.",
  },
  {
    title: "No Bullying or Harassment",
    body: "We are committed to a safe and welcoming environment for everyone. Any form of bullying, harassment, or discrimination will not be tolerated. Report incidents to a moderator or admin immediately.",
  },
  {
    title: "Obey Server Staff",
    body: "Our moderators and administrators are here to ensure a smooth experience. Follow their instructions and guidelines so the Land of Promise remains a wonderful place for all.",
  },
  {
    title: "Be Mindful of Personal Information",
    body: "Keep personal info private. Avoid sharing real names, addresses, phone numbers, or any other identifying details. Online safety is crucial for everyone.",
  },
  {
    title: "Have Fun and Be Creative",
    body: "Most importantly, enjoy your time in the Land of Promise! Build, adventure, and forge lasting friendships in a place where faith and fun come together.",
  },
];

export default function MannersPage() {
  return (
    <Shell>
      <span className="sp-tag">// COMMUNITY //</span>
      <h1 className="sp-h1">
        LOP <span className="accent">MANNERS</span> MANIFESTO
      </h1>
      <p className="sp-lead">
        By following these engagement rules, you contribute to a vibrant and
        inclusive community where the light of God’s love shines through our
        actions and words.
      </p>

      <div className="sp-body">
        {RULES.map((r) => (
          <div className="sp-card" key={r.title}>
            <h4>{r.title.toUpperCase()}</h4>
            <p>{r.body}</p>
          </div>
        ))}
        <p style={{ marginTop: 32 }}>
          Have a blessed and joyful time in this Minecraft adventure!
        </p>
      </div>
    </Shell>
  );
}
