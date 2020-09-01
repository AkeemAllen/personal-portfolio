import React from "react";

export default function Backdrop({ page }) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        minHeight: "100%",
        minWidth: "100vw",
        backgroundColor: `rgba(0,0,0,${page === "Landing" ? 0 : 0.25})`,
      }}
    ></div>
  );
}
