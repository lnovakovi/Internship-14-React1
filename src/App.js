import React, { Component } from "react";
import "./App.css";
import Grocery from "./components/Grocery.js";
import Basket from "./components/basket.js";

const realList = [
  ["Strawberry", 0],
  ["Blueberry", 0],
  ["Orange", 0],
  ["Banana", 0],
  ["Apple", 0],
  ["Carrot", 0],
  ["Celery", 0],
  ["Mushrooms", 0],
  ["Green Pepper", 0],
  ["Eggs", 0],
  ["Cheese", 0],
  ["Butter", 0]
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfGroceries: [],
      isBasketEmpty: true
    };
  }

  handleAddItem = grocery => {
    let groceries = this.state.listOfGroceries;
    realList.forEach(item => {
      // go through all list of groceries
      if (item[0] === grocery) {
        // if match
        item[1]++; // rise amount
        if (item[1] > 1) {
          // if amount is bigger than 1
          return; // return because it is already in basket
        } else {
          // if not it is it's first adding in basket
          groceries.push(item);
        }
      }
    });
    this.setState({ listOfGroceries: groceries, isBasketEmpty: false }); // change state
  };

  handleDeleteItem = (grocery, e) => {
    e.stopPropagation();
    let groceries = this.state.listOfGroceries;
    let checkIfEmpty = true; // help to check if empty
    groceries.forEach(item => {
      if (item[0] === grocery) {
        item[1]--; // if match , decrease the amount
        if (item[1] === 0) {
          groceries = groceries.filter( // remove wanted grocery from basket
            groceryInArray => groceryInArray !== item
          );
        }
      }
      if (item[1] !== 0) checkIfEmpty = false;
    });
    this.setState({ listOfGroceries: groceries, isBasketEmpty: checkIfEmpty });
  };

  handleClearBasket =()=> {
    this.setState({ listOfGroceries: [], isBasketEmpty: true });
  };

  render() {
    return (
      <>
        <div>
          <h2>Groceries</h2>
          {realList.map((grocery, index) => (
            <Grocery
              key={index}
              addItem={this.handleAddItem}
              index={index}
              grocery={grocery[0]}
            />
          ))}
        </div>
        <div>
          <h3 onClick={this.handleClearBasket}>Delete basket</h3>
          <h2>Basket</h2>
          {this.state.isBasketEmpty ? (
            "Basket empty"
          ) : (
            <div>
              {this.state.listOfGroceries.map((groceryItem, index) => (
                <Basket
                  key={index}
                  grocery={groceryItem[0]}
                  amount={groceryItem[1]}
                  deleteGrocery={this.handleDeleteItem}
                />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
