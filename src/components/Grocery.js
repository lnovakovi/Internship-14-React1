import React from "react";

const Grocery = props => {
  return (
    <div key={props.index} onClick={() => props.addItem(props.grocery)}>
      <span>{props.grocery}</span>
      <span>+</span>
    </div>
  );
};

export default Grocery;
