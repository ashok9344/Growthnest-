import React from "react";

export const Gtext = ({ type = "p", children }) => {
  const Tag = type;
  return <Tag>{children}</Tag>;
};

export const Spltext = ({ type = "p", children, className, ...style }) => {
  const Tag = type;
  return (
    <Tag className={className} style={{ color: "#16a34a", fontWeight: "700" }}>
      {children}
    </Tag>
  );
};
