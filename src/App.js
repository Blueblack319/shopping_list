import React, { Component } from "react";

import "./App.css";

import Input from "./components/Input/Input";
import Items from "./components/Items/Items";

class App extends Component {
  state = {
    item: "",
    items: [],
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const item = event.target.value;
      const items = [...this.state.items];
      items.push(item);
      this.setState({ item });
      this.setState({ items });
      event.target.value = "";
    }
  };

  handleDelete = (index) => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    let items = <Items items={this.state.items} deleted={this.handleDelete} />;

    return (
      <div className="App">
        <Input keyDown={this.handleKeyDown} />
        {items}
      </div>
    );
  }
}

export default App;
