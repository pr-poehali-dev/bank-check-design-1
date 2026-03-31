import { useState } from "react";
import { CHECK_NO, MICR } from "@/components/check/checkStyles";
import CheckBackground from "@/components/check/CheckBackground";
import CheckHeader from "@/components/check/CheckHeader";
import CheckBody from "@/components/check/CheckBody";

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
          background: "#faf7f0",
          border: "1px solid #ddd5c0",
          boxShadow: "0 8px 48px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CheckBackground />

        {/* Security stripe top */}
        <div
          style={{
            height: "5px",
            background:
              "repeating-linear-gradient(90deg, #5a4a30 0, #5a4a30 6px, transparent 6px, transparent 10px)",
            opacity: 0.2,
            position: "relative",
            zIndex: 2,
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
            color: "#5a4a30",
            zIndex: 3,
          }}
        >
          {CHECK_NO}
        </div>

        {/* MAIN CONTENT */}
        <div style={{ padding: "20px 28px 0 28px", position: "relative", zIndex: 2 }}>
          <CheckHeader date={date} onDateChange={setDate} />

          {/* Thin rule */}
          <div style={{ height: "1px", background: "#ddd5c0", marginBottom: "16px" }} />

          <CheckBody
            payee={payee} onPayeeChange={setPayee}
            amountNum={amountNum} onAmountNumChange={setAmountNum}
            amountWords={amountWords} onAmountWordsChange={setAmountWords}
            memo={memo} onMemoChange={setMemo}
          />
        </div>

        {/* Security stripe bottom */}
        <div
          style={{
            height: "5px",
            background:
              "repeating-linear-gradient(90deg, #5a4a30 0, #5a4a30 6px, transparent 6px, transparent 10px)",
            opacity: 0.15,
            position: "relative",
            zIndex: 2,
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