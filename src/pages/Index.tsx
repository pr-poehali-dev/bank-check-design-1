import { useState } from "react";

const MICR: React.CSSProperties = {
  fontFamily: "'Courier Prime', 'Courier New', monospace",
  letterSpacing: "0.12em",
};

const LABEL: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "9px",
  textTransform: "uppercase",
  letterSpacing: "0.13em",
  color: "#8a7f6e",
  fontWeight: 600,
  display: "block",
  marginBottom: "4px",
};

const LINE_INPUT: React.CSSProperties = {
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

const CHECK_NO = "4471";
const ROUTING = "BIC 044525225";
const ACCOUNT = "Corr. 30101810400000000225";

export default function Index() {
  const [payee, setPayee] = useState("");
  const [amountNum, setAmountNum] = useState("");
  const [amountWords, setAmountWords] = useState("");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ddd8cc",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8b0a0' fill-opacity='0.08'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23b8b0a0' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E\")",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 16px",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      {/* Controls */}
      <div
        className="no-print"
        style={{
          marginBottom: "28px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "11px",
            color: "#6a6050",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 600,
          }}
        >
          U.S. Personal Check
        </span>
        <div style={{ width: "1px", height: "16px", background: "#b8b0a0" }} />
        <button
          onClick={() => window.print()}
          style={{
            background: "#1a1510",
            color: "#f5f0e8",
            border: "none",
            padding: "9px 24px",
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Print / Save PDF
        </button>
      </div>

      {/* CHECK */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "#f8f4eb",
          border: "1px solid #c5bfb0",
          boxShadow: "0 8px 48px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Security stripe top */}
        <div
          style={{
            height: "5px",
            background:
              "repeating-linear-gradient(90deg, #2a2520 0, #2a2520 6px, transparent 6px, transparent 10px)",
            opacity: 0.15,
          }}
        />

        {/* Check number badge — top right */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "24px",
            ...MICR,
            fontSize: "16px",
            fontWeight: 700,
            color: "#2a2520",
          }}
        >
          {CHECK_NO}
        </div>

        {/* MAIN CONTENT */}
        <div style={{ padding: "20px 28px 0 28px" }}>

          {/* ROW 1 — Bank + Date */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "16px",
            }}
          >
            {/* Bank */}
            <div>
              <div
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1a1510",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Rep.Find
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1a1510",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                Sberbank of Russia
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "10px",
                  color: "#8a7f6e",
                  lineHeight: 1.7,
                  letterSpacing: "0.04em",
                  marginTop: "2px",
                }}
              >
                PJSC Sberbank
                <br />
                19 Vavilova St., Moscow, 117312, Russia
                <br />
                CBR License No. 1481&nbsp;&nbsp;|&nbsp;&nbsp;BIC 044525225
              </div>
            </div>

            {/* Date */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                paddingRight: "40px",
                paddingTop: "4px",
              }}
            >
              <span style={LABEL}>Date</span>
              <input
                type="text"
                placeholder="MM / DD / YYYY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  ...LINE_INPUT,
                  width: "148px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              />
            </div>
          </div>

          {/* Thin rule */}
          <div
            style={{ height: "1px", background: "#d0c8b8", marginBottom: "16px" }}
          />

          {/* ROW 2 — Pay to + $ box */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "14px",
              marginBottom: "6px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
              <span style={LABEL}>Pay to the Order of</span>
            </div>
            <input
              type="text"
              placeholder="Name of payee or company"
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              style={{ ...LINE_INPUT, flex: 1 }}
            />
            {/* Amount box */}
            <div
              style={{
                border: "2px solid #2a2520",
                display: "flex",
                alignItems: "center",
                padding: "4px 10px 4px 8px",
                minWidth: "138px",
                gap: "4px",
                background: "#ede8db",
                flexShrink: 0,
                marginBottom: "1px",
              }}
            >
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1a1510",
                  lineHeight: 1,
                }}
              >
                ₽
              </span>
              <input
                type="text"
                placeholder="0.00"
                value={amountNum}
                onChange={(e) => setAmountNum(e.target.value)}
                style={{
                  ...MICR,
                  flex: 1,
                  border: "none",
                  background: "transparent",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#1a1510",
                  outline: "none",
                  textAlign: "right",
                  minWidth: 0,
                  padding: "0",
                }}
              />
            </div>
          </div>

          {/* ROW 3 — Amount in words */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <input
              type="text"
              placeholder="Amount in words ——————————————————————————————————————————"
              value={amountWords}
              onChange={(e) => setAmountWords(e.target.value)}
              style={{ ...LINE_INPUT, flex: 1, fontSize: "13px" }}
            />
            <span
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "10px",
                color: "#8a7f6e",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                whiteSpace: "nowrap",
                marginBottom: "6px",
                flexShrink: 0,
              }}
            >
              Rubles
            </span>
          </div>

          {/* ROW 4 — Memo + Signature */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "40px",
              marginBottom: "22px",
            }}
          >
            {/* Memo */}
            <div style={{ flex: 1 }}>
              <span style={LABEL}>Memo / For</span>
              <input
                type="text"
                placeholder="Purpose of payment"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                style={LINE_INPUT}
              />
            </div>

            {/* Signature */}
            <div style={{ flex: 1 }}>
              <span style={LABEL}>Authorized Signature</span>
              <div
                style={{
                  borderBottom: "1.5px solid #2a2520",
                  height: "28px",
                  width: "100%",
                }}
              />
            </div>
          </div>

          <div
            style={{ height: "1px", background: "#d0c8b8" }}
          />
        </div>

        {/* MICR LINE */}
        <div
          style={{
            background: "#ede8db",
            padding: "10px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #d0c8b8",
          }}
        >
          <div
            style={{
              ...MICR,
              fontSize: "15px",
              color: "#1a1510",
              letterSpacing: "0.22em",
              userSelect: "none",
            }}
          >
            {ROUTING}&nbsp;&nbsp;&nbsp;{ACCOUNT}
          </div>
          <div
            style={{
              ...MICR,
              fontSize: "13px",
              color: "#5a5040",
              letterSpacing: "0.16em",
            }}
          >
            {CHECK_NO}
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "9px",
              color: "#8a7f6e",
              textAlign: "right",
              letterSpacing: "0.07em",
              lineHeight: 1.8,
            }}
          >
            <span style={{ textTransform: "uppercase", fontWeight: 600 }}>BIC</span>&nbsp;&nbsp;044525225
            <br />
            <span style={{ textTransform: "uppercase", fontWeight: 600 }}>Corr. Acc.</span>&nbsp;&nbsp;30101810400000000225
          </div>
        </div>

        {/* Security stripe bottom */}
        <div
          style={{
            height: "5px",
            background:
              "repeating-linear-gradient(90deg, #2a2520 0, #2a2520 6px, transparent 6px, transparent 10px)",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Hint */}
      <p
        className="no-print"
        style={{
          marginTop: "18px",
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "11px",
          color: "#8a7f6e",
          letterSpacing: "0.08em",
          textAlign: "center",
        }}
      >
        Fill in the fields · click Print / Save PDF · inputs are hidden when printing
      </p>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; }
          input { border-color: transparent !important; }
          input::placeholder { color: transparent !important; }
        }
        input::placeholder { color: #c0b8a8; font-style: italic; }
        input:focus { background: rgba(255,255,180,0.25) !important; }
      `}</style>
    </div>
  );
}