import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Meridian Close: continuous close without the chaos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #0c0f14 0%, #141822 45%, #1a1f2e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,83,0.12), transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#141822",
              border: "1px solid rgba(212,168,83,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#d4a853"
                strokeWidth="1.75"
              />
              <circle cx="12" cy="12" r="3" fill="#d4a853" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 42,
              fontWeight: 600,
              letterSpacing: -0.02,
              color: "#f4f1ea",
            }}
          >
            Meridian Close
          </span>
        </div>
        <p
          style={{
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: -0.03,
            color: "#f4f1ea",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Your close, without the chaos.
        </p>
        <p
          style={{
            marginTop: 28,
            fontSize: 24,
            color: "rgba(228,224,216,0.65)",
            textAlign: "center",
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          One workspace for reconciliations, controls, and sign-off. Built for teams who outgrew the spreadsheet.
        </p>
      </div>
    ),
    { ...size }
  );
}
