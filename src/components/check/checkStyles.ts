export const MICR: React.CSSProperties = {
  fontFamily: "'Courier Prime', 'Courier New', monospace",
  letterSpacing: "0.12em",
};

export const LABEL: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "9px",
  textTransform: "uppercase",
  letterSpacing: "0.13em",
  color: "#8a7f6e",
  fontWeight: 600,
  display: "block",
  marginBottom: "4px",
};

export const LINE_INPUT: React.CSSProperties = {
  ...MICR,
  width: "100%",
  borderBottom: "1.5px solid #2a2520",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  background: "transparent",
  fontSize: "14px",
  color: "#1a1510",
  outline: "none",
  padding: "2px 4px 4px",
  boxSizing: "border-box" as const,
};

export const CHECK_NO = "4471";
export const ROUTING = "BIC 044525225";
export const ACCOUNT = "Corr. 30101810400000000225";
