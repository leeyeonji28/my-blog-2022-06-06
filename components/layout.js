import { Link } from "gatsby";
import React, { Children } from "react";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  return (
    <>
      <div className={container}>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
        <div>Copyright...</div>
      </div>
    </>
  );
}

export default Layout;
