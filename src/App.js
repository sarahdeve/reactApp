// import React from "react";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Navbar from "./Screens/navbar";
import Cart from "./Screens/cart";
import Footer from "./Screens/footer";
import SellOnWemmie from "./Screens/sellonwemmie";
import SignIn from "./Screens/signin";
import SignUp from "./Screens/signup";
import Store from "./Screens/Store";
import Receipt from "./Screens/receipt";
import AdminLogin from "./Screens/adminlogin";
import About from "./Screens/aboutus";

class App extends Component {
  state = {
    LoginDetails: {},
    cartCount: 0,
  };

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

  processCount = (count) => {
    if (!count) return;
    return this.setState({ cartCount: count });
  };
  componentDidMount() {
    console.log(JSON.parse(localStorage.getItem("LoginDetails")));
    return localStorage.getItem("LoginDetails");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counter[index].value++;
    this.setState({ counters });
  };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };
  // // {...props} checkSignIn={this.state.signIn}
  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };
  render() {
    return (
      <BrowserRouter>
        <SellOnWemmie></SellOnWemmie>
        <Navbar count={this.state.cartCount} />
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
        {/* <Cart productItems={productItems} total={productItems.reduce((a,c)=>(a+c.price*c.quantity), 0)}/> */}
        <Switch>

          <Route path="/store" render={(props) => <Store />} />
          <Route path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
          <Route path="/receipt" component={Receipt} />
          <Route path="/about" component={About} />
          <Route
            path="/"
            render={() => <HomeScreen processCount={this.processCount}  onIncrement={this.handleIncrement}/> }
          />
          {/* <Route
          path="/cart"
          component={Counters}
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        /> */}
          <Route path="/adminlogin" component={AdminLogin} />
        </Switch>
        <div></div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
