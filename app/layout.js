export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000" }}>
        <div style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,100,0,0.15), transparent 60%)",
          pointerEvents: "none",
          filter: "blur(60px)"
        }} />
        {children}
      </body>
    </html>
  );
}
