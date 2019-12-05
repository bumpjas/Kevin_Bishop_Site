import React from "react";
import NavBar from "../components/navbar";
import {Helmet} from "react-helmet";
import "../assets/css/store.css";

const Store = () => (
  <React.Fragment>
    <Helmet>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <title>E-Store single page layout | Script Tutorials</title>
        <meta charset="utf-8" />>
        <link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/nivo-slider.css" type="text/css" media="screen" />
        <script src="js/jquery.js"></script>
        <script src="js/jquery.nivo.slider.pack.js"></script>
        <script src="js/main.js"></script>
        <script type="text/javascript" src="js/html5.js"></script>
    </Helmet>
    <NavBar />
    <div class="container">
          <ul>
              <li class="selected"><a href="#">Home</a></li>
              <li><a href="#">Specials</a></li>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">About</a></li>
              <li><a href="http://www.script-tutorials.com/creating-new-html5css3-single-page-layout-e-store/">Back To Tutorial</a></li>
          </ul>
        <div class="top_head">
          <div class="logo">
            <a href="https://www.script-tutorials.com/">
              <img
                src="images/logo.jpg"
                title="E-Store template"
                alt="E-Store template"
              />
            </a>
          </div>
          <section id="search">
            <form action="#" onsubmit="return false;" method="get">
              .......
            </form>
            <ul id="social">.......</ul>
          </section>
        </div>
        <section id="submenu">
          <ul>
            <li>
              <a href="google.com">Category #1</a>
            </li>
            <li>
              <a href="google.com">Category #2</a>
            </li>
            .......
          </ul>
        </section>
      <div id="slider">
        <section id="slider-wrapper">.......</section>
      </div>
      <div id="main">
        <section id="content">
          <div id="left">
            <h3>Last products</h3>
            <ul>............</ul>
          </div>
          <div id="right">
            <h3>Top sells</h3>
            <ul>............</ul>
          </div>
        </section>
      </div>
      <footer>
        <div id="privacy">Footer</div>
      </footer>
    </div>
  </React.Fragment>
);

export default Store;
