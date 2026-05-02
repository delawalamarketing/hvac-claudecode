import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Delawala Marketing — HVAC marketing for Barrie & Simcoe County";
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
          padding: "80px",
          background:
            "linear-gradient(135deg, #0B2340 0%, #102b4f 60%, #0B2340 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Delawala Marketing
          </div>
          <div
            style={{
              background: "#F97316",
              color: "white",
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            HVAC
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Get more local HVAC customers — <span style={{ color: "#F97316" }}>not more clicks.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Barrie & Simcoe County HVAC marketing — Local Services Ads, Google Ads, review automation.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255,255,255,0.7)",
            fontSize: 22,
          }}
        >
          <div>hvac.delawalamarketing.com</div>
          <div>Free 20-min audit · No pitch</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
