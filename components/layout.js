import { Link } from "gatsby";
import React, { Children } from "react";

import { container } from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <div className={container}>
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
      </div>
    </>
  );
}

export default Layout;
