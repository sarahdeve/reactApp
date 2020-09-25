import React, { Component } from "react";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleonChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    let existingProducts = window.localStorage.getItem("user");
    if (existingProducts) {
      console.log("hello");
      existingProducts = JSON.parse(existingProducts).concat(this.state);
      window.localStorage.setItem(
        "LoginDetails",
        JSON.stringify(existingProducts)
      );
    } else {
      // console.log("hi");
      const emptyArr = [];
      emptyArr.push(this.state);
      window.localStorage.setItem("LoginDetails", JSON.stringify(emptyArr));
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="row">
        <div
          className="modal fade col-md-12"
          id="myModal"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title mx-auto">Sign In</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form action="" className="m-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary form-control"
                    data-toggle="modal"
                    data-target="#welcomemodal"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
