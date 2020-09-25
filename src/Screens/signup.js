import React, { Component } from "react";

class SignUp extends Component {
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
    let existingUsers = window.localStorage.getItem("users");
    if (existingUsers) {
      existingUsers = JSON.parse(existingUsers).concat(this.state);
      window.localStorage.setItem("users", JSON.stringify(existingUsers));
    } else {
      // console.log("hi");
      // const store = 
      const initialUsers = [];
      initialUsers.push(this.state);
      window.localStorage.setItem("users", JSON.stringify(initialUsers));
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card mt-5 p-0 offset-md-2  mx-auto">
              <div className="card-header text-center border-0">
                <h3>
                  <i>
                    <b>Sign Up form</b>
                  </i>
                </h3>
              </div>
              <form onSubmit={this.handleSubmit} className="m-5">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleonChange}
                  placeholder="Firstname"
                  name="firstname"
                />
                <br />
                <br />
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleonChange}
                  placeholder="Lastname"
                  name="lastname"
                />
                <br />
                <br />
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleonChange}
                  placeholder="Username"
                  name="username"
                />
                <br />
                <br />
                <input
                  type="email"
                  className="form-control"
                  onChange={this.handleonChange}
                  placeholder="Email"
                  name="email"
                />
                <br />
                <br />
                <input
                  type="number"
                  className="form-control"
                  onChange={this.handleonChange}
                  placeholder="Enter phone number"
                  name="phonenumber"
                />
                <br />
                <br />
                <input
                  type="password"
                  className="form-control"
                  onChange={this.handleonChange}
                  placeholder="Password"
                  name="password"
                />
                <br />
                <br />
                <input
                  type="password"
                  className="form-control"
                  onChange={this.handleonChange}
                  placeholder="Confirm Password"
                  name="confirmpassword"
                />

                <br />
                <br />
                {/* <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    onChange={this.handleonChange}
                    className="custom-control-input"
                    id="custom"
                    required
                  />
                  <label
                    className="custom-control-label text-sm"
                    for="custom"
                  >
                    I agree to <i class="text-warning">Terms</i> and{" "}
                    <i class="text-warning">Privacy Policy</i>
                  </label>
                  <div className="invalid-feedback">
                    dvskjbkfnhgkrdfhnuyrnej
                  </div>
                </div> */}

                <div className="mx-auto d-flex">
                  {/* <button
                    type="button"
                    onSubmit={}
                    className="cancelbtn form-control"
                  >
                    Cancel
                  </button> */}
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-sm btn-primary"
                    data-toggle="modal"
                    data-target=""
                    // onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="modal" id="welcomemodal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>Welcome!</h3>
                        <button className="close" data-dismiss="modal">
                          <span>&times;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
