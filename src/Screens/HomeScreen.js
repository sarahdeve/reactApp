import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { allproducts: [] };
  }
  componentDidMount() {
    console.log(this.props);
    console.log("tester props", this.props.tester);
    console.log(JSON.parse(localStorage.getItem("allproducts")));
    localStorage.getItem("allproducts") &&
      this.setState({
        allproducts: JSON.parse(localStorage.getItem("allproducts")),
      });
  }

  addToCart = (product) => {
    console.log("hello");
    try {
      if (window.localStorage.hasOwnProperty("cart")) {
        const carty = JSON.parse(localStorage.cart);
        carty.push(product);
        localStorage.cart = JSON.stringify(carty);
      } else {
        const item = [product];
        localStorage.cart = JSON.stringify(item);
      }

      this.props.processCount(JSON.parse(localStorage.cart).length);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="mainbody mb-5">
        <div className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-10">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                      <img
                        src="images/frag2.jpg"
                        className="d-block w-50"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                      <img
                        src="images/frag2.jpg"
                        className="d-block w-50"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img src="images/frag2.jpg" className="d-block w-50" alt="..." />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-offset-1 ">
                <div id="section1" className="mt-3 shadow=sm">
                  <div>
                    <h2>Zara Men</h2>
                  </div>
                  <hr className="m-0" />
                  <div className=" row productcard mb-4">
                    {this.state.allproducts.map((product, i) => (
                      <div key={i} className="col-md-2" >
                        <div className=" text-center">
                            <img className=""  style={{maxWidth:'100%'}}></img>
                          <Link to={"/product/" + product.i} >
                            {" "}
                            <img className="" src={`images/${product.image}`}></img>
                          </Link>
                          {/* {product.image} */}
                          <br />
                          {product.productname}
                          <br />
                          {/* {product.categories}
                        <br /> */}
                          <h4>
                            <b>${product.price}</b>
                          </h4>
                          {/* <img src={`images/${product.image}`}></img> */}
                          <div>
                          {/* <selection className="">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>0</option>
                            </selection>   */}
                          <button
                            onClick={() => this.addToCart(product)}
                            className="btn btn-sm btn-secondary"
                          >
                            Add to Cart
                          </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div id="section2" className="">
                  <div className="">
                    <h2>Storm Spray</h2>
                  </div>
                  <hr />
                  <div className="col-md-10">
                    {this.state.allproducts.map((product, i) => (
                      <div key={i}>
                        <div className="">
                          {product.productname}
                          <br />
                          {product.categories}
                          <br />
                          {product.image}
                          <br />
                          {product.price}
                          <br />
                          <img src={`images/${product.image}`}></img>
                          <button className="btn btn-sm"> Add to Cart</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <nav className="navbar mb-5">
            <div>
              <div className="row">
                  <div className="col-sm-12">
                <div className="">
                  <h3>About Company</h3>
                  <p>!lorem lorem </p>
                  <p className="">- Samson Akpe, CEO</p>
                </div>
                <div className="">
                  <h3>Tweets</h3>
                </div>
                <div className="">
                  <h3>Keep Connected</h3>
                  <Link to="" className="fb fa fa-facebook">
                    Like us on Facebook
                  </Link>
                  <br />
                  <Link to="" className="fb1 fa fa-twitter">
                    Follow us on Twitter
                  </Link>
                  <br />
                  <Link to="" className="fb1 fa fa-instagram">
                    Follow us on Instagram
                  </Link>
                </div>
                <div className="">
                  <h3>Contact Information</h3>
                  <Link to="" className="fa fa-map-marker"></Link>
                    <span>
                      &nbsp;The company name <span><b>WemmieScents</b>,</span>Rinsayo Street.
                    </span>
                    <div className="clearfix"></div>
                  
                  <Link to="" className="fa fa-phone">
                    &nbsp;<span>+2348107729038</span>
                  </Link>
                  <br/>
                  <Link className="fa fa-envelope-o" to="oluwasefemi@gmail.com">
                    mail <div className="clearfix"></div>
                  </Link>
                </div>
              </div>
            </div>
           </div>
          </nav>
           {/* <div className="row">
              <p className="">
                © 2020 WemmieScents. All Rights Reserved | Design by ...........
              </p>
            </div> */}
        </div>
      </div>
    );
  }
}
export default HomeScreen;
