import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const alt = "Eduardo Porciuncula | Desenvolvedor Full Stack Sênior";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(17,228,163,0.35) 0%, rgba(10,10,10,0) 55%)",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a1a1a1",
          }}
        >
          {personalInfo.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            marginTop: 24,
            letterSpacing: -2,
          }}
        >
          {personalInfo.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#a1a1a1",
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          React · Next.js · Node.js · TypeScript
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 64,
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex", color: "#ededed", fontWeight: 700 }}>
            eduardoluiz
          </div>
          <div style={{ display: "flex", color: "#11e4a3", fontWeight: 700 }}>
            .dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
