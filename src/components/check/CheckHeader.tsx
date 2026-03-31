import { LABEL, LINE_INPUT } from "./checkStyles";

interface CheckHeaderProps {
  date: string;
  onDateChange: (v: string) => void;
}

export default function CheckHeader({ date, onDateChange }: CheckHeaderProps) {
  return (
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
          onChange={(e) => onDateChange(e.target.value)}
          style={{
            ...LINE_INPUT,
            width: "148px",
            textAlign: "center",
            fontSize: "13px",
          }}
        />
      </div>
    </div>
  );
}
