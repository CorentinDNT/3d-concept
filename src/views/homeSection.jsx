import React from "react";
import imageSphere from "../assets/images/1.png";
import logo from "../assets/images/logo.svg";

const homeSection = () => {
  return (
    <section className="showcase overflow-hidden">
      <a href="./" className="logo">
        <img src={logo} alt="" className="logo-image" />
      </a>

      <nav className="navbar vertical-center line line-vertical">
        <ul>
          <li>
            <a className="link">Home</a>
          </li>
          <li>
            <a className="link">Pricing</a>
          </li>
          <li>
            <a className="link">Testimonails</a>
          </li>
          <li>
            <a className="link xl-hideen">Contact</a>
          </li>
        </ul>
      </nav>

      <a className="link link-contact sm-hidden vertical-center line line-vertical">
        Contact
      </a>

      <h1 className="title line line-horizontal overflow-hidden">
        <span className="to-right has-in-common" style={{ "--delay": "0s" }}>
          DONATO
        </span>
      </h1>

      <h2 className="subtitle overflow-hidden">
        <span className="to-right has-in-common" style={{ "--delay": "0.15s" }}>
          Corentin
        </span>
      </h2>

      <div className="vertical-text line line-vertical">
        <div className="vertical-text-inner overflow-hidden">
          <span
            className="to-bottom has-in-common"
            style={{ "--delay": "0.25s" }}
          >
            The future is now
          </span>
        </div>
      </div>

      <div className="description line line-horizontal">
        <p className="overflow-hidden">
          <span
            className="to-bottom has-in-common"
            style={{ "--delay": "0.35s" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            magnam similique, explicabo quia mollitia, vitae consequatur nostrum
            vel distinctio quas laudantium, deserunt commodi temporibus aliquam
            sapiente! Repellendus amet quas delectus?
          </span>
        </p>
      </div>

      <a
        className="cta link scale-rotate has-in-common"
        style={{ "--delay": "0.75s" }}
        id="cta"
      >
        Take <br />
        Control
      </a>

      <span className="copyright copyright-year line line-vertical">
        &copy;2024
      </span>

      <span className="copyright copyright-name line line-horizontal">
        Automation X, LLC. All rights reserved.
      </span>

      <img
        src={imageSphere}
        className="shape has-in-common sm-hidden"
        data-offset=".05"
        style={{ "--delay": "0.5s" }}
      />

      <img
        src={imageSphere}
        className="shape shape-md has-in-common sm-hidden"
        data-offset=".025"
        style={{ "--delay": "0.25s" }}
      />

      <img
        src={imageSphere}
        className="shape has-in-common shape-lg sm-hidden"
        data-offset=".02"
        style={{ "--delay": "0.35s" }}
      />
    </section>
  );
};

export default homeSection;
