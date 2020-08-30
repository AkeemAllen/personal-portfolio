import React from "react";

export default function Backdrop() {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        height: "100vh",
        width: "100vw",
      }}
    ></div>
  );
}
