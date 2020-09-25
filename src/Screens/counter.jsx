import React, { Component } from "react";

class Counter extends Component {
  state = {

    tags: ["tag1", "tag2", "tag3", "tag4"]
  };
  render() {
    return (
      <React.Fragment>
        {/* <span>{this.state.count}</span> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=> this.props.onIncrement(this.props.counter)}><b>+</b></button>
        <button onClick={()=> this.props.onDelete(this.props.counter.id)}><b>Del</b></button>
        <br/>
        {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
      </React.Fragment>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
