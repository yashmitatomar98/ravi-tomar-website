import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Ravi Tomar — Founder, Chairman & Managing Director, CRL Diagnostics";
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
          justifyContent: "space-between",
          background: "#07110F",
          padding: "72px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 25% 30%, rgba(121,199,181,0.14), transparent 55%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9BA8A3",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <span style={{ color: "#F3F0E8", fontFamily: "Georgia, serif", fontSize: 40 }}>
            RT.
          </span>
          <span>Delhi · India</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#B89B5E",
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              marginBottom: 18,
            }}
          >
            Founder · Chairman · Managing Director
          </div>
          <div style={{ color: "#F3F0E8", fontSize: 150, lineHeight: 0.9, display: "flex" }}>
            Ravi Tomar
          </div>
          <div style={{ color: "#79C7B5", fontSize: 54, marginTop: 20, display: "flex" }}>
            Building trust in every diagnosis.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9BA8A3",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <span>CRL Diagnostics</span>
          <span style={{ color: "#B7FF4A" }}>Precision · Purpose · Progress</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
