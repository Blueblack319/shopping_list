import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <h1>Shopping List</h1>
      <div className={classes.ask}>
        <h2>What do you want to buy?</h2>
        <form onKeyDown={props.keyDown}>
          <input type="text" placeholder="Write item" />
        </form>
      </div>
      <hr />
    </div>
  );
};

export default Input;
