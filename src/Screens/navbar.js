import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./signup";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // let verify = this.props.verify;
    // console.log(verify);
    return (
      <div className="">
        <nav className="navbar navbar-inverse mt-5 ">
          <Link to="/" className="navbar-brand text-white">
            <h2>WemmieScents</h2>
          </Link>
          <ul className="nav navbar-nav navbar-right space-between navbar-expand">
            <Link to="/store" className="text-white">
              <span></span>Admin
            </Link>
            &nbsp;&nbsp;
            {/* <Link to="/counters" className="text-white">
                    <span></span> Counters
                  </Link> */}

            <Link to="/cart" className="text-white">
              <span></span> Cart
            </Link>

            <div className="badge " style={{color: "red"}}>
              {this.props.count ? (
                <span>{this.props.count}</span>
              ) : (
                <span>
                  {localStorage.cart && JSON.parse(localStorage.cart).length}
                </span>
              )}
            </div>
            &nbsp;
            <Link to="/signup" className="text-white">
              <span></span> Sign Up
            </Link>
            &nbsp;&nbsp;
            {/* <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >
              Launch demo modal
            </button> */}
            <span
              className="text-white"
              data-toggle="modal"
              data-target="#myModal"
              style={{ cursor: "pointer" }}
            >
              <span></span>Sign In
            </span>
            &nbsp;&nbsp;
            <Link to="/about" className="text-white ">
              <span></span> About Us
            </Link>
            &nbsp;&nbsp;
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
