import { notFound } from "next/navigation";
import Link from "next/link";

const data = {
  beef: {
    name: "Beef",
    temps: [
      "Rare → 130-135°F (Juicy, soft)",
      "Medium Rare → 135-145°F (Perfect)",
      "Medium → 145-155°F (Firm)"
    ],
    tips: [
      "Pull early, carryover cooks it",
      "Always rest 5–10 min",
      "Use high heat sear"
    ],
  },
  chicken: {
    name: "Chicken",
    temps: ["165°F → Fully safe"],
    tips: ["Don’t overcook", "Use indirect heat", "Let juices settle"],
  },
  pork: {
    name: "Pork",
    temps: ["145°F → Juicy safe", "200°F → Pulled pork"],
    tips: ["Rest after cook", "Low and slow for tenderness"],
  },
  shrimp: {
    name: "Shrimp",
    temps: ["Opaque + curled = done"],
    tips: ["Cook fast", "Overcook = rubber"],
  },
  lamb: {
    name: "Lamb",
    temps: ["135°F → Medium rare", "145°F → Medium"],
    tips: ["Best slightly pink", "Don’t overcook"],
  },
};

export default function Page({ params }) {
  const meat = data[params.type];
  if (!meat) return notFound();

  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #1a1a1a, #000)",
      color: "#fff",
      padding: 20,
      fontFamily: "sans-serif"
    }}>

      <Link href="/" style={{
        color: "#ff5a00",
        textDecoration: "none",
        marginBottom: 20,
        display: "inline-block"
      }}>
        ← Back
      </Link>

      <h1 style={{
        color: "#ff5a00",
        textShadow: "0 0 15px rgba(255,90,0,0.7)"
      }}>
        {meat.name}
      </h1>

      <h3>🔥 Temps</h3>
      {meat.temps.map((t, i) => (
        <div key={i} style={{
          background: "#111",
          padding: 10,
          marginBottom: 8,
          borderRadius: 8,
          border: "1px solid #222"
        }}>
          {t}
        </div>
      ))}

      <h3 style={{ marginTop: 20 }}>👨‍🍳 Pro Tips</h3>
      {meat.tips.map((t, i) => (
        <div key={i} style={{
          background: "#111",
          padding: 10,
          marginBottom: 8,
          borderRadius: 8,
          border: "1px solid #222"
        }}>
          {t}
        </div>
      ))}

    </main>
  );
}
