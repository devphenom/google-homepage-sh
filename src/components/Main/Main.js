// libraries
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

// Styles
import useStyles from "./styles";
import "./Main.scss";

// Component
export default function Main() {
  const classes = useStyles();

  const [txt, setTxt] = useState(null)


  function renderUserText(val) {
    setTxt(val.target.value)
  }

  return (
    <section id="main">
      <div className="row">
        <div logo>
          {
            txt ? <h1>{txt}</h1> : <img src="../logo1.png" alt="logo" className="logo" />
          }
        </div>
        <div className="searchField">
          <SearchIcon className={classes.searchBar} />
          <input type="text" onChange={renderUserText} />
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



