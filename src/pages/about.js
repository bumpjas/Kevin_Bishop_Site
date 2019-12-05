import React from "react";
import NavBar from "../components/navbar";
// import KBLOGO from '../assets/images/kb7.png'
import "../assets/css/about.css";
const About = () => (
  <React.Fragment>
    <NavBar />
    <nav className="about">
      <div>
        <h2>
          <strong>
            <em>CORE VALUES OF KEVIN BISHOP MINISTRIES</em>
          </strong>
        </h2>
      </div>
      <div>
        <h3>
          <strong>
            <em>THE WORD OF GOD</em>
          </strong>
        </h3>
        <h4>
          The Bible is the key to knowing and doing God’s will. (2 Timothy
          3:16-17)
        </h4>
      </div>
      <div>
        <h3>
          <strong>POSITIVE ATTITUDE</strong>
        </h3>
        <h4>
          A good attitude is more important than aptitude, talent or calling.
          Your attitude will determine your altitude or level of influence.
        </h4>
      </div>
      <div>
        <h3>
          <strong> SPIRITUAL AUTHORITY </strong>
        </h3>
        <h4>
          A proper understanding of Spiritual Authority is essential for true
          effective Christianity.
        </h4>
      </div>
      <div>
        <h3>
          <strong>SERVANT LEADERSHIP </strong>
        </h3>
        <h4>
          {" "}
          All Christians of all ages are called to be leaders in all places.
        </h4>
      </div>
      <div>
        <h3>
          <strong> BIBLICAL SUCCESS AND PROSPERITY</strong>
          <br />
        </h3>
        <h4>
          {" "}
          All meaningful and lasting success is the direct result of a life that
          is rightly aligned and related to Christ. This personal relationship
          with Jesus Christ begins with the new birth experience according to
          Romans 10:9-10
        </h4>
      </div>
      <div>
        <h3>PRAYER</h3>
        <h4>
          Nothing should be done without prayer and time in your prayer closet.
        </h4>
      </div>
    </nav>
  </React.Fragment>
);

export default About;
