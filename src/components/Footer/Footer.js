import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">Nigeria</div>
      <div id="nav">
        <ul className="nav-items">
          <li>
            {" "}
            <Link to="#" className="link">
              About
            </Link>{" "}
          </li>
          <li>
            <Link to="#" className="link">
              Advertising
            </Link>{" "}
          </li>
          <li>
            <Link to="#" className="link">
              Business
            </Link>{" "}
          </li>
        </ul>
        <ul className="nav-items">
          <li>
            {" "}
            <Link to="#" className="link">
              Privacy
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="#" className="link">
              Terms
            </Link>
          </li>
          <li>
            {" "}
            <Link to="#" className="link">
              Settings
            </Link>{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
}
