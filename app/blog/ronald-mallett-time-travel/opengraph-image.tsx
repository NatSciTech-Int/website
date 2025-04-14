import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Ronald Mallett: The Physicist's Quest for Time Travel"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to right, #1e90ff, #1ec8ff)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#64d2ff" }}>Lib</span>
        <span>Sci</span>
        <span style={{ fontSize: "24px", marginLeft: "10px" }}>Blog</span>
      </div>
      <div
        style={{
          fontSize: "40px",
          textAlign: "center",
          maxWidth: "800px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Ronald Mallett: The Physicist's Quest for Time Travel
      </div>
      <div
        style={{
          fontSize: "24px",
          textAlign: "center",
          maxWidth: "700px",
          opacity: 0.9,
        }}
      >
        Exploring theories of time travel through circulating light beams and closed timelike curves
      </div>
    </div>,
    size,
  )
}
