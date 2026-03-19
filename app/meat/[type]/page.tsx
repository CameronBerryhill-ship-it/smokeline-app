import { notFound } from "next/navigation";
import Link from "next/link";

const data: any = {
  beef: {
    name: "Beef",
    temps: [
      "120-125°F → Very Rare",
      "130-135°F → Rare",
      "135-145°F → Medium Rare",
      "145-160°F → Medium",
      "160°F+ → Dry",
    ],
    tips: ["Rest meat", "Pull early", "Use indirect heat"],
  },
  chicken: {
    name: "Chicken",
    temps: ["165°F → Safe", "170°F → Better for thighs"],
    tips: ["Don’t overcook", "Sauce late", "Check thickest part"],
  },
  pork: {
    name: "Pork",
    temps: ["145°F → Safe & juicy", "160°F → Dry"],
    tips: ["Rest meat", "Don’t overcook chops"],
  },
  shrimp: {
    name: "Shrimp",
    temps: ["Opaque = done", "Overcook = rubber"],
    tips: ["Cook fast", "Pull quick"],
  },
  lamb: {
    name: "Lamb",
    temps: ["130-140°F → Tender", "145°F → Medium"],
    tips: ["Don’t overcook", "Rest before slicing"],
  },
};

export default async function Page({ params }: any) {
  const meat = data[params.type];
  if (!meat) return notFound();

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: 20 }}>
      <Link href="/" style={{ color: "#ff7a00" }}>← Back</Link>

      <h1 style={{ fontSize: 36, marginTop: 20 }}>{meat.name}</h1>

      <h2>Temps</h2>
      {meat.temps.map((t: string, i: number) => (
        <div key={i}>{t}</div>
      ))}

      <h2 style={{ marginTop: 20 }}>Tips</h2>
      {meat.tips.map((t: string, i: number) => (
        <div key={i}>{t}</div>
      ))}
    </main>
  );
}
