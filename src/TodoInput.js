import React from "react";
import plusIcon2 from "./images/plus_2.svg";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
  }
  keyPress = event => {
    if (event.keyCode === 13) {
      this.props.addTodo(event.target.value);
      this.setState({ inputVal: "" });
    }
  };

  inputChange = event => {
    this.setState({ inputVal: event.target.value });
  };

  render() {
    return (
      <div className="todo-input">
        <input
          type="text"
          onKeyDown={this.keyPress}
          value={this.state.inputVal}
          onChange={this.inputChange}
          placeholder="New task..."
        />
        <img src={plusIcon2} alt="plus icon" />
      </div>
    );
  }
}

export default TodoInput;
