import React from "react";

const TopHeader = ({ title }) => {
  return (
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
      {title}
    </div>
  );
};

export default TopHeader;
