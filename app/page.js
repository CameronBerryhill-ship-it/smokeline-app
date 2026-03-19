import Link from "next/link";

const sections = [
  {
    name: "Live Cook",
    slug: "live-cook",
    icon: "🔥",
    note: "Track temp, graph the cook, and start rest timing",
    temp: "Live gauge + graph",
  },
  {
    name: "Cool Now",
    slug: "cool-now",
    icon: "❄️",
    note: "Watch cooling with a small corner temp display",
    temp: "Post-cook cooling mode",
  },
  {
    name: "Pork",
    slug: "pork",
    icon: "🐖",
    note: "Chops, loin, shoulder",
    temp: "Best starting point: 145°F",
  },
  {
    name: "Chicken",
    slug: "chicken",
    icon: "🐔",
    note: "Breast, thigh, wings",
    temp: "Safe target: 165°F",
  },
  {
    name: "Beef",
    slug: "beef",
    icon: "🐄",
    note: "Steaks, burgers, roasts",
    temp: "Popular zone: 130–145°F",
  },
  {
    name: "Shrimp",
    slug: "shrimp",
    icon: "🦐",
    note: "Fast hot cooks",
    temp: "Done around: 140–145°F",
  },
  {
    name: "Lamb",
    slug: "lamb",
    icon: "🐑",
    note: "Chops, rack, leg",
    temp: "Best zone: 135–145°F",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #2a1208 0%, #120b08 30%, #050505 70%, #000000 100%)",
        color: "#f5f5f5",
        padding: "20px 16px 40px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: 22,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#ffb38a",
              marginBottom: 10,
            }}
          >
            Underground BBQ Guide
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 42,
              lineHeight: 1,
              color: "#ff6a1a",
              textShadow: "0 0 18px rgba(255,106,26,0.35)",
            }}
          >
            SmokeLine
          </h1>

          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              color: "#c8c8c8",
              fontSize: 15,
              lineHeight: 1.5,
            }}
          >
            Live cooking, cooling, doneness, tenderness, and pro grilling tips.
          </p>
        </div>

        <div style={{ marginBottom: 10, color: "#b8b8b8", fontSize: 13 }}>
          Tools + Guides
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {sections.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  borderRadius: 22,
                  padding: 18,
                  background:
                    "linear-gradient(180deg, rgba(24,24,24,0.96), rgba(10,10,10,0.98))",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 10px 22px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontSize: 34 }}>{item.icon}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#ffb38a",
                      border: "1px solid rgba(255,106,26,0.2)",
                      background: "rgba(255,106,26,0.08)",
                      borderRadius: 999,
                      padding: "7px 10px",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    Open
                  </div>
                </div>

                <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
                  {item.name}
                </div>

                <div style={{ fontSize: 14, color: "#bcbcbc", marginBottom: 12 }}>
                  {item.note}
                </div>

                <div style={{ fontSize: 14, color: "#ffcfb4" }}>
                  {item.temp}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
