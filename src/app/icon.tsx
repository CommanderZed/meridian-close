import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141822",
          borderRadius: 8,
          border: "1px solid rgba(212,168,83,0.35)",
        }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
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
    ),
    { ...size }
  );
}
