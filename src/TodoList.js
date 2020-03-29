import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: this.props.todoList
    };
  }

  todoComplete = (index, event) => {
    var todoList = this.state.todoList;
    if (todoList[index][1] === true) todoList[index][1] = false;
    else todoList[index][1] = true;
    this.setState({todoList:todoList})
  };

  checkedItem = (todo, isChecked) => {
  if(isChecked) return <strike>{todo}</strike>;
  else return todo;

  }

  render() {
    return (
      <div className="todo-list">
        <div className="todo-heading">
          <h1>To Do</h1>
        </div>
        {this.state.todoList.map((task, index) => (
          <label className="todo-card" key={index}>
            {this.checkedItem(task[0], task[1])}
            <input
              type="checkbox"
              checked={task[1]}
              onChange={(event) => this.todoComplete(index, event)}
            />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    );
  }
}

export default TodoList;
