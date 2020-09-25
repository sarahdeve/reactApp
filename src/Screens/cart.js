import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carty: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(JSON.parse(localStorage.getItem("cart")));
    localStorage.getItem("cart") &&
      this.setState({
        carty: JSON.parse(localStorage.getItem("cart")),
      });
  }
  // handleIncrement = counter => {
  //     const counters = [...this.state.counters]
  //    const index = counters.indexOf(counter);
  //    counters[index] = {...counter};
  //    counters[index].value++;
  //    this.setState({counters});
  //  };

  //  handleReset = () => {
  //    const counters = this.state.counters.map(c => {
  //        c.value = 0;
  //        return c;
  //    });
  //    this.setState({counters});
  //  };

  //  handleDelete = counterId => {
  //    const counters = this.state.counters.filter(c => c.id !== counterId);
  //    this.setState({counters});
  //  };
  render() {
    return (
      <React.Fragment>
        {/* {this.state.counters.map(counter =>
             <Counter key={counter.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                counter={counter}
                />
        )} */}

        <div class="container">
          <h2 className="text-center m-3">CART</h2>

          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {this.state.carty.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn"><b>CheckOut</b></button>
        </div>
        
              
      </React.Fragment>
    );
  }
}

export default Cart;
