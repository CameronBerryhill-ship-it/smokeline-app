import { notFound } from "next/navigation";
import Link from "next/link";

const data = {
  beef: {
    name: "Beef",
    temps: ["130-135°F → Rare", "135-145°F → Medium Rare"],
    tips: ["Rest meat", "Pull early"],
  },
  chicken: {
    name: "Chicken",
    temps: ["165°F → Safe"],
    tips: ["Don’t overcook"],
  },
  pork: {
    name: "Pork",
    temps: ["145°F → Safe"],
    tips: ["Rest meat"],
  },
  shrimp: {
    name: "Shrimp",
    temps: ["Opaque = done"],
    tips: ["Cook fast"],
  },
  lamb: {
    name: "Lamb",
    temps: ["135-145°F → Best"],
    tips: ["Don’t overcook"],
  },
};

export default function Page({ params }) {
  const meat = data[params.type];
  if (!meat) return notFound();

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: 20 }}>
      <Link href="/" style={{ color: "#ff7a00", textDecoration: "none" }}>
        ← Back
      </Link>

      <h1>{meat.name}</h1>
      {meat.temps.map((t, i) => <div key={i}>{t}</div>)}
      {meat.tips.map((t, i) => <div key={i}>{t}</div>)}
    </main>
  );
}
