import React from "react";

const GlobalBtn = ({ btnName, px = 4, py = 2, style = {}, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-${px} py-${py}`}
      style={{
        background: "#16a34a",
        border: "none",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: "600",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(22, 163, 74, 0.25)",
        cursor: "pointer",
        transition: "all 0.25s ease",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#15803d";
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(22, 163, 74, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#16a34a";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(22, 163, 74, 0.25)";
      }}
    >
      {btnName}
    </button>
  );
};

export default GlobalBtn;
