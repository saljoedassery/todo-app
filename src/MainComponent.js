import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import NoTaskIcon from "./images/list.svg";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  addTodo = task => {
    var todoList = this.state.todoList;
    var newTask = [task, false]
    todoList.push(newTask);
    this.setState({ todoList: todoList });
  };

  render() {
    var noTask;
    if (this.state.todoList.length === 0) {
      noTask = <div className="no-task"><img src={NoTaskIcon} alt="no task icon" />
          <h3>No tasks found</h3>
          <p>You can add task using the + above</p>
        </div>
      
    } else noTask = <div></div>;

    return (
      <div>
        <TodoList todoList={this.state.todoList} />
        <TodoInput addTodo={task => this.addTodo(task)} />
        {noTask}
      </div>
    );
  }
}

export default MainComponent;
