import { Link } from "gatsby";
import React from "react";

function Head() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/test">Test</Link>
      <Link to="/test-space">Test-Space</Link>
    </div>
  );
}

export default Head;
