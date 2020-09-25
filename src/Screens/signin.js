import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="row">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>
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
                <form onClick={this.handleSubmit} action="" className="m-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleonChange}
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleonChange}
                  />
                  <br />
                  <button
                    type="submit"
                    // onClick={this.handleSubmit}
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

export default SignIn;
