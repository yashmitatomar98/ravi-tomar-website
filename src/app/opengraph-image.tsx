import { ImageResponse } from "next/og";

export const alt = "Ravi Tomar — Founder, Chairman & Managing Director, CRL Diagnostics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F8F7F4",
          padding: "96px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", width: 64, height: 2, background: "#B08A45", marginBottom: 36 }} />
        <div style={{ display: "flex", color: "#18202A", fontSize: 104, lineHeight: 1 }}>Ravi Tomar</div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            color: "#162433",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          Founder · Chairman &amp; Managing Director
        </div>
        <div style={{ display: "flex", marginTop: 14, color: "#5F6670", fontSize: 30, fontFamily: "sans-serif" }}>
          CRL Diagnostics · Healthcare &amp; Diagnostics
        </div>
      </div>
    ),
    { ...size }
  );
}
