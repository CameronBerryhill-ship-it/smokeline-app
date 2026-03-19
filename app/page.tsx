import Link from "next/link";

const meats = [
  { name: "Pork", slug: "pork", icon: "🐖" },
  { name: "Chicken", slug: "chicken", icon: "🐔" },
  { name: "Beef", slug: "beef", icon: "🐄" },
  { name: "Shrimp", slug: "shrimp", icon: "🦐" },
  { name: "Lamb", slug: "lamb", icon: "🐑" },
];

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ color: "#ff7a00", fontSize: 42 }}>SmokeLine 🔥</h1>

      <p style={{ color: "#aaa" }}>
        Tap a meat and get perfect temps and pro grilling tips.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
        {meats.map((meat) => (
          <Link key={meat.slug} href={`/meat/${meat.slug}`}>
            <div style={{
              background: "#111",
              padding: 20,
              borderRadius: 12,
              border: "1px solid #333"
            }}>
              <div style={{ fontSize: 30 }}>{meat.icon}</div>
              <div>{meat.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
