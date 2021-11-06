import React from "react";
import { Link } from "react-router-dom";
// icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// styles
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="left">
        <nav>
          <ul>
            <li>
              <div className="icon1">
                <MenuIcon />
              </div>
            </li>
            <li>
              <Link to="#" className="link">
                ALL
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                IMAGES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <div className="icon">
          <AccountCircleIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
