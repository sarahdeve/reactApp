import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="m-5">
          <h3 className="text-center">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            nisi velit. Ut id velit ex. Donec quis sapien gravida, rutrum metus
            eu, viverra elit. Sed sodales commodo ex, id porttitor leo
            ullamcorper nec.
          </p>
        </div>
        <div className="d-flex mx-auto">
          <div className="col-md-6 about-bottom-left">
            <h4>AIMS & OBJECTIVES</h4>
            <p>
              We aim to always maintain an environment of fairness honesty and
              integrity of our clients, employees, vendors and society at large.
            </p>
          </div>
          <div className="col-md-6">
            <h4>SERVICE ORIENTATIONt</h4>
            <p>
              We are a customer-specific service oriented company that extends
              service oriented company that extends service ranging from
              perliminary analysis and planning to detailed design,
              developement, delivery and maintenance. we constantly integrate
              new technology to adapt existing systems thus ensuring setbaks in
              either current of future busines strategy.
            </p>
          </div>
        </div>
        <div className="mx-auto d-flex">
          <div className="col-md-6 about-bottom-left">
            <h4>OUR COMMITMENT</h4>
            <p>
              We are committed to our CLIENTS and PARTNERS. We have a passion
              for emerging technology, we love taking on challenges and pride
              ourselves on seeing them through.
            </p>
          </div>
          <div className="col-md-6 about-bottom-left about-bottom-right">
            <h4>OUR CORE VALUES</h4>
            <p>
              WEMMIE-SCENTS remains committed to upholding our core values and
              honest beliefs as we aim to always maintain a bussiness enviroment
              of fairness, honesty and integrity for our clients.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
