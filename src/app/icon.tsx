import { ImageResponse } from "next/og";

// Route segment config
export const dynamic = "force-static";

// Image metadata
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 300,
          background: "linear-gradient(to bottom right, #2563eb, #3b82f6)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "100px",
        }}
      >
        AI
      </div>
    ),
    {
      ...size,
    }
  );
}
