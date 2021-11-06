// libraries
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

// Styles
import useStyles from "./styles";
import "./Main.scss";

// Component
export default function Main() {
  const [txt, setTxt] = useState(null);
  const [error, setError] = useState(null);

  const classes = useStyles();

  const renderUserText = (e) => {
    setTxt(e.target.value);

    if (e.target.value) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (txt) {
      window.location.href = `https://www.google.com/search?q=${txt}`;
    } else {
      setError(true);
    }
  };
  return (
    <section id="main">
      <div className="row">
        {/* logo */}
        <div className="logo">
          {txt ? (
            <h1>{txt}</h1>
          ) : (
            <img src="../logo1.png" alt="logo" className="logo" />
          )}
        </div>
        {/* search bar and buttons */}
        <form>
          <div className={`searchField ${error ? "error" : null}`}>
            <SearchIcon className={classes.searchBar} />
            <input type="text" onChange={renderUserText} />
            <MicIcon color="primary" />
          </div>
          {error && <p>Search field is empty</p>}
          <div className="buttons">
            <button
              type="submit"
              className="searchBtn"
              onClick={(e) => handleSubmit(e)}
            >
              Google Search
            </button>
            <button className="feel-lucky" onClick={(e) => e.preventDefault()}>
              {" "}
              <a href="https://www.google.com/doodles"> I'm feeling lucky </a>
            </button>
          </div>
        </form>
        <div className="links">
          Google offered in{" "}
          <a href="https://www.google.com/search?q=deutsch">Deutsch</a>,{" "}
          <a href="https://www.google.com/search?q=italino">Italino</a>,{" "}
          <a href="https://www.google.com/search?q=francais">Francais</a>,{" "}
          <a href="https://www.google.com/search?q=rumantsch">Rumantsch</a>,{" "}
        </div>
      </div>
    </section>
  );
}
