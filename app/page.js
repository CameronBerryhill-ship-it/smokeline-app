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
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #1a1a1a, #000)",
      color: "#fff",
      padding: 20,
      fontFamily: "sans-serif"
    }}>

      <h1 style={{
        color: "#ff5a00",
        fontSize: 48,
        textShadow: "0 0 20px rgba(255,90,0,0.7)"
      }}>
        SmokeLine 🔥
      </h1>

      <p style={{ color: "#aaa", marginBottom: 30 }}>
        Underground BBQ temperature guide. Tap your meat.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }}>
        {meats.map((meat) => (
          <Link key={meat.slug} href={`/meat/${meat.slug}`} style={{ textDecoration: "none" }}>
            <div style={{
              background: "linear-gradient(145deg, #111, #000)",
              padding: 20,
              borderRadius: 16,
              border: "1px solid #222",
              boxShadow: "0 0 20px rgba(255,90,0,0.15)",
              transition: "0.2s"
            }}>
              <div style={{ fontSize: 32 }}>{meat.icon}</div>
              <div style={{ fontSize: 18 }}>{meat.name}</div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
