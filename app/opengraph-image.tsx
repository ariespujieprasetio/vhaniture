import { ImageResponse } from "next/og";

export const alt = "Vhaniture — Interior, Furniture, Build";
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
          justifyContent: "space-between",
          padding: "72px",
          color: "#f3f0e9",
          background: "#1d1d1b",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, letterSpacing: 7 }}>
          <span>VHANITURE</span>
          <span style={{ color: "#aa9d8b", fontSize: 12 }}>JAKARTA · INDONESIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#aa9d8b", fontSize: 15, letterSpacing: 5, marginBottom: 20 }}>INTERIOR · FURNITURE · BUILD</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: .94, letterSpacing: -3 }}>
            <span>Ruang yang Dirancang</span>
            <span>untuk Hidup Lebih Baik.</span>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", height: 1, background: "#5e5c56" }} />
      </div>
    ),
    size
  );
}
