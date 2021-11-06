// libraries
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

// Styles
import useStyles from "./styles";
import "./Main.scss";

// Component
export default function Main() {
  const classes = useStyles();

  return (
    <section id="main">
      <div className="row">
        <div>
          <img src="../" alt="" />
        </div>
        <div className="searchField">
          <SearchIcon className={classes.searchBar} />
          <input type="text" />
          <MicIcon color="primary" />
        </div>
        <div className="buttons">
          <button className="searchBtn">Google Search</button>
          <button className="feel lucky">I'm feeling lucky</button>
        </div>
        <p>
          Google offered in{" "}
          <a href="https://www.google.com/search?q=deutsch">Deutsch</a>,{" "}
          <a href="https://www.google.com/search?q=italino">Italino</a>,{" "}
          <a href="https://www.google.com/search?q=francais">Francais</a>,{" "}
          <a href="https://www.google.com/search?q=rumantsch">Rumantsch</a>,{" "}
        </p>
      </div>
    </section>
  );
}
