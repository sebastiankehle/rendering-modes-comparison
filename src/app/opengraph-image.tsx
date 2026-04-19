import { ImageResponse } from "next/og";

export const alt = "rendering-modes — ssr · ssg · isr · csr";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const modes = [
  { label: "SSR", name: "Server-Side Rendering", color: "#5aa8d6" },
  { label: "SSG", name: "Static Site Generation", color: "#4fb874" },
  { label: "ISR", name: "Incremental Regeneration", color: "#d1a556" },
  { label: "CSR", name: "Client-Side Rendering", color: "#d85eb4" },
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          padding: 64,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 36,
              height: 36,
              border: "1px solid #2a2a2a",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: "#fafafa",
            }}
          >
            rm
          </div>
          <div style={{ fontSize: 20, color: "#8a8a8a" }}>rendering-modes</div>
          <div style={{ fontSize: 18, color: "#4a4a4a", marginLeft: "auto" }}>
            next.js 16 · app router
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              fontFamily: "system-ui, sans-serif",
              lineHeight: 1.05,
            }}
          >
            Four rendering modes.
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              fontFamily: "system-ui, sans-serif",
              color: "#6a6a6a",
              lineHeight: 1.05,
            }}
          >
            One side-by-side.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {modes.map((m) => (
            <div
              key={m.label}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                border: "1px solid #2a2a2a",
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{ width: 12, height: 12, background: m.color }}
                />
                <div style={{ color: m.color, fontSize: 22 }}>{m.label}</div>
              </div>
              <div style={{ fontSize: 16, color: "#8a8a8a" }}>{m.name}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
