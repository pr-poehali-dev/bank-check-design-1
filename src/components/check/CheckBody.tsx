import { MICR, LABEL, LINE_INPUT, CHECK_NO, ROUTING, ACCOUNT } from "./checkStyles";

interface CheckBodyProps {
  payee: string;
  onPayeeChange: (v: string) => void;
  amountNum: string;
  onAmountNumChange: (v: string) => void;
  amountWords: string;
  onAmountWordsChange: (v: string) => void;
  memo: string;
  onMemoChange: (v: string) => void;
}

export default function CheckBody({
  payee, onPayeeChange,
  amountNum, onAmountNumChange,
  amountWords, onAmountWordsChange,
  memo, onMemoChange,
}: CheckBodyProps) {
  return (
    <>
      {/* ROW 2 — Pay to + amount box */}
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
          onChange={(e) => onPayeeChange(e.target.value)}
          style={{ ...LINE_INPUT, flex: 1 }}
        />
        {/* Amount box */}
        <div
          style={{
            border: "2px solid #1a4a7a",
            display: "flex",
            alignItems: "center",
            padding: "4px 10px 4px 8px",
            minWidth: "138px",
            gap: "4px",
            background: "rgba(180,210,240,0.4)",
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
            onChange={(e) => onAmountNumChange(e.target.value)}
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
          onChange={(e) => onAmountWordsChange(e.target.value)}
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
        <div style={{ flex: 1 }}>
          <span style={LABEL}>Memo / For</span>
          <input
            type="text"
            placeholder="Purpose of payment"
            value={memo}
            onChange={(e) => onMemoChange(e.target.value)}
            style={LINE_INPUT}
          />
        </div>
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

      <div style={{ height: "1px", background: "#a8c4e0" }} />

      {/* MICR LINE */}
      <div
        style={{
          background: "rgba(180,210,240,0.35)",
          padding: "10px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #a8c4e0",
          position: "relative",
          zIndex: 2,
          margin: "0 -28px",
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
    </>
  );
}
