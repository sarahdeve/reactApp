import React, { Component } from "react";
import myHoc from "./myhoc";

class Store extends Component {
  state = {};
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleImage = (event) => {
    let img = event.target.value;
    let removed = img.slice(12);
    this.setState({ [event.target.name]: removed });
  };
  // handleAdd = () => {
  //   if (this.state.check) {
  //     alert("h+*-ello");
  //   }
  // };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ image: this.state.image });
    console.log(this.state);
    let existingProducts = window.localStorage.getItem("allproducts");
    if (existingProducts) {
      console.log("hello");
      existingProducts = JSON.parse(existingProducts).concat(this.state);
      window.localStorage.setItem(
        "allproducts",
        JSON.stringify(existingProducts)
      );
    } else {
      // console.log("hi");
      const emptyArr = [];
      emptyArr.push(this.state);
      window.localStorage.setItem("allproducts", JSON.stringify(emptyArr));
    }
    alert("Done");
  };

  render() {
    return (
      <React.Fragment>
        <div className="m-3">
          <div className="row accordion" id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2>
                  <button
                    className="btn btn-link btn-block"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Add to store
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <form onSubmit={this.handleSubmit} className="col-md-10 m-5">
                    <input
                      className="form-control m-1"
                      type="text"
                      onChange={this.handleChange}
                      name="productname"
                      placeholder="enter product name"
                    />
                    <input
                      className="form-control m-1"
                      type="text"
                      onChange={this.handleChange}
                      name="categories"
                      placeholder="enter product cate"
                    />
                    <input
                      className="form-control m-1"
                      type="file"
                      onChange={this.handleImage}
                      name="image"
                      placeholder="enter product"
                    />
                    <input
                      className="form-control m-1"
                      type="number"
                      onChange={this.handleChange}
                      name="price"
                      placeholder="enter product price"
                    />
                    <button type="submit" className="btn btn-sm btn-primary">
                      Add
                    </button>
                   
                  </form> <button type="" className="btn btn-sm btn-danger">
                      Edit
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Store;
