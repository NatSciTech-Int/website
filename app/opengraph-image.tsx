import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Natural Science & Technology Organization"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
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
          fontSize: "64px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#64d2ff" }}>Naimport { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Natural Science & Technology Organization"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
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
          fontSize: "64px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#64d2ff" }}>Nat</span>
        <span>Sci</span>
        <span style={{ color: "#64ffb4" }}>Tech</span>
      </div>
      <div
        style={{
          fontSize: "32px",
          textAlign: "center",
          maxWidth: "800px",
          opacity: 0.9,
        }}
      >
        International High School Organization for Science & Technology
      </div>
    </div>,
    {
      ...size,
    },
  )
}

t</span>
        <span>Sci</span>
        <span style={{ color: "#64ffb4" }}>Tech</span>
      </div>
      <div
        style={{
          fontSize: "32px",
          textAlign: "center",
          maxWidth: "800px",
          opacity: 0.9,
        }}
      >
        International High School Organization for Science & Technology
      </div>
    </div>,
    {
      ...size,
    },
  )
}

