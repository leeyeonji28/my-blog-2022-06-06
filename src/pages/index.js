import { Link } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/test">Test</Link>
        <Link to="/test-space">Test-Space</Link>
      </div>

      <h1>Hone Page</h1>
    </main>
  );
};

export default IndexPage;
