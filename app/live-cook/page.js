"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function MiniGauge({ temp, target }) {
  const pct = Math.max(0, Math.min(100, (temp / Math.max(target, 200)) * 100));

  return (
    <div
      style={{
        position: "fixed",
        top: 14,
        right: 14,
        width: 82,
        borderRadius: 18,
        padding: 10,
        background: "rgba(12,12,12,0.92)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
        zIndex: 20,
      }}
    >
      <div style={{ fontSize: 10, color: "#bbb", marginBottom: 6 }}>TEMP</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: "#ff7a1a" }}>
        {temp}°
      </div>
      <div
        style={{
          height: 8,
          borderRadius: 999,
          background: "#222",
          overflow: "hidden",
          marginTop: 8,
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "linear-gradient(90deg, #ff7a1a, #ffb347)",
          }}
        />
      </div>
    </div>
  );
}

function TempGraph({ points }) {
  const width = 320;
  const height = 140;
  const maxTemp = Math.max(200, ...points.map((p) => p.temp));
  const path = points
    .map((p, i) => {
      const x = (i / Math.max(points.length - 1, 1)) * width;
      const y = height - (p.temp / maxTemp) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        width: "100%",
        height: 160,
        display: "block",
        background: "linear-gradient(180deg, #161616, #0a0a0a)",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {[0.25, 0.5, 0.75].map((line, i) => (
        <line
          key={i}
          x1="0"
          x2={width}
          y1={height * line}
          y2={height * line}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      ))}
      <path d={path} fill="none" stroke="#ff7a1a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function LiveCookPage() {
  const [temp, setTemp] = useState(135);
  const [target, setTarget] = useState(145);
  const [restSeconds, setRestSeconds] = useState(180);
  const [restRunning, setRestRunning] = useState(false);
  const [points, setPoints] = useState([
    { time: 0, temp: 110 },
    { time: 1, temp: 118 },
    { time: 2, temp: 126 },
    { time: 3, temp: 132 },
    { time: 4, temp: 135 },
  ]);

  useEffect(() => {
    if (!restRunning) return;
    const timer = setInterval(() => {
      setRestSeconds((s) => {
        if (s <= 1) return 0;
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [restRunning]);

  const restDisplay = useMemo(() => {
    const m = Math.floor(restSeconds / 60);
    const s = restSeconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, [restSeconds]);

  function addReading() {
    setPoints((prev) => [...prev, { time: prev.length, temp: Number(temp) || 0 }]);
  }

  function connectProbe() {
    alert(
      "Bluetooth probe hookup is scaffolded here, but direct iPhone web-browser BLE pairing is not supported yet. For true iPhone probe pairing, this feature needs a native iPhone app."
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #2a1208 0%, #120b08 30%, #050505 70%, #000000 100%)",
        color: "#f5f5f5",
        padding: "20px 16px 80px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <MiniGauge temp={Number(temp)} target={Number(target)} />

      <div style={{ maxWidth: 480, margin: "0 auto" }}>
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
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#ffb38a", marginBottom: 8 }}>
            Live Cooking
          </div>
          <h1 style={{ margin: 0, fontSize: 36, color: "#ff6a1a" }}>Live Cook</h1>
          <p style={{ marginTop: 12, color: "#c8c8c8", lineHeight: 1.6 }}>
            Watch temp live, chart the cook, and start a resting timer when you pull the meat.
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, rgba(24,24,24,0.96), rgba(10,10,10,0.98))",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 18,
            padding: 16,
            marginBottom: 14,
          }}
        >
          <div style={{ marginBottom: 12, fontSize: 13, color: "#b8b8b8" }}>Probe Connection</div>
          <button
            onClick={connectProbe}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 14,
              border: "1px solid rgba(255,106,26,0.25)",
              background: "rgba(255,106,26,0.08)",
              color: "#ffd2bc",
              fontWeight: 700,
            }}
          >
            Connect Bluetooth Probe
          </button>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, rgba(24,24,24,0.96), rgba(10,10,10,0.98))",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 18,
            padding: 16,
            marginBottom: 14,
          }}
        >
          <div style={{ marginBottom: 12, fontSize: 13, color: "#b8b8b8" }}>Live Temperature</div>

          <label style={{ display: "block", marginBottom: 8, fontSize: 13 }}>Current Temp</label>
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
            }}
          />

          <label style={{ display: "block", marginBottom: 8, fontSize: 13 }}>Target Temp</label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#111",
              color: "#fff",
              marginBottom: 12,
              fontSize: 16,
            }}
          />

          <button
            onClick={addReading}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 14,
              border: "1px solid rgba(255,106,26,0.25)",
              background: "rgba(255,106,26,0.08)",
              color: "#ffd2bc",
              fontWeight: 700,
            }}
          >
            Add Reading to Graph
          </button>
        </div>

        <div style={{ marginBottom: 10, color: "#b8b8b8", fontSize: 13 }}>
          Temp While Cooking
        </div>
        <div style={{ marginBottom: 18 }}>
          <TempGraph points={points} />
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, rgba(24,24,24,0.96), rgba(10,10,10,0.98))",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 18,
            padding: 16,
          }}
        >
          <div style={{ marginBottom: 12, fontSize: 13, color: "#b8b8b8" }}>Resting Timer</div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#ffcfb4",
              marginBottom: 14,
            }}
          >
            {restDisplay}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <button
              onClick={() => {
                setRestSeconds(180);
                setRestRunning(true);
              }}
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,106,26,0.25)",
                background: "rgba(255,106,26,0.08)",
                color: "#ffd2bc",
                fontWeight: 700,
              }}
            >
              Start 3 Min
            </button>

            <button
              onClick={() => {
                setRestSeconds(300);
                setRestRunning(true);
              }}
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#111",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Start 5 Min
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
            <button
              onClick={() => setRestRunning(false)}
              style={{
                padding: "12px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#111",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Pause
            </button>

            <button
              onClick={() => {
                setRestRunning(false);
                setRestSeconds(0);
              }}
              style={{
                padding: "12px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#111",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
