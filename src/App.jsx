import React, { useState } from "react";
import "./App.css"; // Import your CSS file here

import scc from "./d.png";
import git from "./github.svg";
import linked from "./linkedin.svg";
import leetcode from "./leetcode.svg";
import close from "./close.svg";
import side from "./side.svg";

function App() {
  const [button, setButton] = useState("ast");
  const [activeButton, setActiveButton] = useState("ast");

  function asd() {
    window.location.href = "https://leetcode.com/Darpan301/";
  }

  function asd1() {
    window.location.href = "https://github.com/Darpan3011";
  }

  function asd2() {
    window.location.href = "https://linkedin.com/in/darpan-kanani";
  }

  function handleClick(e) {
    setActiveButton(e);
    setButton(e);
  }

  const [b1, setb1] = useState(true);
  function warning() {
    setb1(false);
  }

  return (
    <>
      {b1 && (
        <div className="warning">
          <p>Project Under Development.</p>
          <img
            className="dj"
            src={close}
            alt="close"
            height={15}
            onClick={warning}
          ></img>
        </div>
      )}
      <div className="container">
        <div className="sidemenu">
          <div className="imagelogo">
            <img src={scc} alt="imagess" className="a" />
            <span className="names">Darpan</span>
          </div>
          <div className="about2">
            <button
              className={`about ${activeButton === "ast" ? "active" : ""}`}
              onClick={() => handleClick("ast")}
            >
              About
            </button>
            <button
              className={`about ${activeButton === "ddf" ? "active" : ""}`}
              onClick={() => handleClick("ddf")}
            >
              Work
            </button>
            <div className="links">
              <img src={git} alt="Hey" onClick={asd1} />
              <img src={linked} alt="Hey" onClick={asd2} />
              <img src={leetcode} alt="Hey" onClick={asd} />
            </div>
          </div>
        </div>
        <div className="main">
          {button === "ast" && (
            <div className="content">
              <div className="qst">Hi,</div>
              <div className="rst">
                I'm Darpan,
                {/* Removed the second-d class */}
              </div>
              <div className="sst">Web Developer</div>
            </div>
          )}
          {button === "ast" && (
            <img
              className="animatedImage"
              src={side}
              alt="imagesds"
              height={"300px"}
            />
          )}
          {button === "ddf" && (
            <div className="content">
              <p style={{ fontSize: "25px" }}>Check out my work:</p>
              <ul
                style={{ listStyleType: "none", padding: 0, fontSize: "25px" }}
              >
                <li>
                  <a
                    href="https://portfolio-two-coral-84.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color:"pink"}}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://booking-app-iota-two.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color:"pink" }}
                  >
                    Booking App
                  </a>
                </li>
                <li>
                  <a
                    href="https://social-media-ashy-three.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color:"pink" }}
                  >
                    Social Media App
                  </a>
                </li>
                <li>
                  <a
                    href="https://weather-app-qrx3.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color:"pink" }}
                  >
                    Weather App
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
