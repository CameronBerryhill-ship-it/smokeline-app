"use client";

import Link from "next/link";
import { useState } from "react";

function CornerTemp({ temp }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 14,
        right: 14,
        padding: "10px 12px",
        borderRadius: 16,
        background: "rgba(12,12,12,0.92)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
        zIndex: 20,
      }}
    >
      <div style={{ fontSize: 10, color: "#bbb" }}>TEMP</div>
      <div style={{ fontSize: 18, fontWeight: 800, color: "#8ed8ff" }}>
        {temp}°
      </div>
    </div>
  );
}

export default function CoolNowPage() {
  const [temp, setTemp] = useState(132);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #101c24 0%, #0a1015 35%, #040608 70%, #000000 100%)",
        color: "#f5f5f5",
        padding: "20px 16px 80px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <CornerTemp temp={Number(temp)} />

      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            color: "#a9deff",
            textDecoration: "none",
            marginBottom: 18,
            fontSize: 14,
          }}
        >
          ← Back
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
          <div
            style={{
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#a9deff",
              marginBottom: 8,
            }}
          >
            Cooling Mode
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 36,
              color: "#8ed8ff",
            }}
          >
            Cool Now
          </h1>

          <p
            style={{
              marginTop: 12,
              color: "#c8c8c8",
              lineHeight: 1.6,
            }}
          >
            Keep a smaller temp readout visible while the meat cools after the cook.
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(24,24,24,0.96), rgba(10,10,10,0.98))",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 18,
            padding: 16,
          }}
        >
          <div style={{ marginBottom: 12, fontSize: 13, color: "#b8b8b8" }}>
            Cooling Temp
          </div>

          <input
            type="number"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#111",
              color: "#fff",
              marginBottom: 12,
              fontSize: 16,
              boxSizing: "border-box",
            }}
          />

          <div style={{ fontSize: 13, color: "#9d9d9d", lineHeight: 1.5 }}>
            This keeps the temp smaller in the corner while you’re out of live cooking mode.
          </div>
        </div>
      </div>
    </main>
  );
}
