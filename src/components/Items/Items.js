import React from "react";
import Item from "./Item/Item";

const Items = (props) => {
  return props.items
    .map((item, index) => {
      return (
        <Item
          item={item}
          deleted={props.deleted.bind(this, index)}
          key={Math.floor(Math.random() * 100000)}
        />
      );
    })
    .reverse();
};

export default Items;
