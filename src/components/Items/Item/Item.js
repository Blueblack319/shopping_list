import React, { useState } from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  const [checkedState, setCheckedState] = useState({
    checked: false,
  });
  const nameClasses = [classes.name];

  const handleCheck = () => {
    if (checkedState.checked) {
      setCheckedState({ checked: false });
    } else {
      setCheckedState({ checked: true });
    }
  };

  if (checkedState.checked) {
    nameClasses.push(classes.checked);
  }

  return (
    <div className={classes.container}>
      <div className={nameClasses.join(" ")}>{props.item}</div>
      <div>
        <button className={classes.check} onClick={handleCheck}>
          <span role="img" aria-label="check">
            ❎
          </span>
          Check
        </button>
        <button className={classes.delete} onClick={props.deleted}>
          <span role="img" aria-label="delete">
            ❌
          </span>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
