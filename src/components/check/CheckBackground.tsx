export default function CheckBackground() {
  return (
    <>
      {/* Horizontal security lines */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(180deg, transparent 0px, transparent 11px, rgba(180,160,120,0.13) 11px, rgba(180,160,120,0.13) 12px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Diagonal micro-pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(180,160,120,0.06) 0px, rgba(180,160,120,0.06) 1px, transparent 1px, transparent 8px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />
    </>
  );
}