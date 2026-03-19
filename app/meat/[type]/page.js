import { notFound } from "next/navigation";
import Link from "next/link";

const data = {
  beef: {
    name: "Beef",
    icon: "🐄",
    intro:
      "Beef gives you the widest range of doneness. The best finish depends on the cut, thickness, and how juicy you want it.",
    temps: [
      "130–135°F • Rare • soft and juicy",
      "135–145°F • Medium rare to medium • best balance",
      "145–155°F • Medium • firmer bite",
      "155°F+ • more done • moisture starts dropping",
    ],
    tips: [
      "Pull a few degrees early and let carryover heat finish it.",
      "Rest before slicing so juices stay in the meat.",
      "Use direct heat for sear, then indirect heat for thicker cuts.",
    ],
  },
  chicken: {
    name: "Chicken",
    icon: "🐔",
    intro:
      "Chicken is all about hitting safe temp without drying it out. Breasts and thighs should be treated differently.",
    temps: [
      "165°F • safe minimum",
      "165–170°F • best range for breast meat",
      "170–180°F • thighs and legs still eat well here",
      "180°F+ • breast meat dries fast",
    ],
    tips: [
      "Check the thickest section away from bone.",
      "Cook breasts gentler than thighs.",
      "Sauce near the end so sugars do not burn.",
    ],
  },
  pork: {
    name: "Pork",
    icon: "🐖",
    intro:
      "Pork is best when not overcooked. Lean cuts can still be juicy and tender when pulled at the right time.",
    temps: [
      "145°F • safe minimum for whole cuts",
      "145–150°F • juicy and tender",
      "151–159°F • firmer bite",
      "160°F+ • lean cuts begin drying out",
    ],
    tips: [
      "Rest chops before slicing.",
      "Pull slightly early and let carryover do the rest.",
      "Shoulder is a different cook and goes much higher for pull-apart texture.",
    ],
  },
  shrimp: {
    name: "Shrimp",
    icon: "🦐",
    intro:
      "Shrimp cook fast. The difference between perfect and rubbery is usually only a small window.",
    temps: [
      "Below 140°F • not fully done",
      "140–145°F • ideal sweet spot",
      "146–155°F • firmer texture",
      "156°F+ • rubbery and dry",
    ],
    tips: [
      "Cook hot and fast.",
      "Pull as soon as they turn opaque and springy.",
      "Use skewers or a grill basket for easier turning.",
    ],
  },
  lamb: {
    name: "Lamb",
    icon: "🐑",
    intro:
      "Lamb shines when it stays tender and slightly pink. Chops and racks especially benefit from careful timing.",
    temps: [
      "130–139°F • rosy and tender",
      "140–145°F • medium-rare edge",
      "146–155°F • medium",
      "156°F+ • drying out",
    ],
    tips: [
      "Simple seasoning works great: salt, garlic, herbs, oil.",
      "Do not overcook chops.",
      "Rest before slicing for better juice retention.",
    ],
  },
};

export default function Page({ params }) {
  const meat = data[params.type];
  if (!meat) return notFound();

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
      <div
        style={{
          maxWidth: 480,
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-block",
            color: "#ffb38a",
            textDecoration: "none",
            marginBottom: 18,
            fontSize: 14,
          }}
        >
          ← Back to Meat Guides
        </Link>

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
          <div style={{ fontSize: 42, marginBottom: 10 }}>{meat.icon}</div>

          <div
            style={{
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#ffb38a",
              marginBottom: 8,
            }}
          >
            Grill Guide
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 36,
              color: "#ff6a1a",
              textShadow: "0 0 18px rgba(255,106,26,0.35)",
            }}
          >
            {meat.name}
          </h1>

          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              color: "#c8c8c8",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {meat.intro}
          </p>
        </div>

        <div style={{ marginBottom: 10, color: "#b8b8b8", fontSize: 13 }}>
          Temperature Guide
        </div>

        <div style={{ marginBottom: 22 }}>
          {meat.temps.map((t, i) => (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(180deg, rgba(24,24,24,0.96), rgba(10,10,10,0.98))",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "14px 16px",
                marginBottom: 10,
                color: "#f0f0f0",
                fontSize: 15,
                lineHeight: 1.4,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 10, color: "#b8b8b8", fontSize: 13 }}>
          Pro Tips
        </div>

        <div>
          {meat.tips.map((t, i) => (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(180deg, rgba(24,24,24,0.96), rgba(10,10,10,0.98))",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "14px 16px",
                marginBottom: 10,
                color: "#f0f0f0",
                fontSize: 15,
                lineHeight: 1.5,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
