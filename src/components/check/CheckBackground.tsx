export default function CheckBackground() {
  return (
    <>
      {/* Horizontal security lines */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(180deg, transparent 0px, transparent 11px, rgba(100,160,220,0.18) 11px, rgba(100,160,220,0.18) 12px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Watermark */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        <div style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "88px",
          fontWeight: 900,
          color: "rgba(100,160,220,0.09)",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          transform: "rotate(-28deg)",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}>
          VOID · VOID · VOID
        </div>
      </div>

      {/* Diagonal micro-pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(100,160,220,0.07) 0px, rgba(100,160,220,0.07) 1px, transparent 1px, transparent 8px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />
    </>
  );
}
