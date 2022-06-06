import { Link } from "gatsby";
import React, { Children } from "react";

function Layout({ children }) {
  return (
    <>
      <main>
        <div style={{ display: "flex", gap: 20 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test">Test</Link>
          <Link to="/test-space">Test-Space</Link>
        </div>
        {children}
        <div>Copyright...</div>
      </main>
    </>
  );
}

export default Layout;
