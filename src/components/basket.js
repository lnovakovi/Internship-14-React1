import React, { Component } from "react";
import "../App.css";

class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cross: ""
    };
  }

  handleCrossing = () => {
    this.setState({ cross: "line-through" });
  };

  render() {
    return(
        <>
        <div>
            <span onClick={this.handleCrossing} style = {{ textDecoration : this.state.cross}}>
              {this.props.grocery} {this.props.amount}
            </span>
            <span
              onClick={e => this.props.deleteGrocery(this.props.grocery, e)}
            >
              -
            </span>
            </div>
        </>

    )
  }
}

export default Basket;
