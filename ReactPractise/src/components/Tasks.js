import React, { Component } from "react";

const taskStorage = [];
const UlClass = "UlClass";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { TaskValue: "" };
    this.fileRef = React.createRef();
  }
  AddTask = () => {
    let inputValue = this.state.TaskValue;
    if (inputValue === "") return;
    taskStorage.push(inputValue);
    this.setState(taskStorage);
    console.log(taskStorage);
  };
  myChangeHandler = (event) => {
    if (event.which === 13) {
      this.AddTask();
      this.setState({ TaskValue: event.target.value });
      console.log();

      event.preventDefault();
    }
  };
  inputField = () => {
    return (
      <input
        type="text"
        name="taskInput"
        id="taskInput"
        placeholder="Write task here"
        onKeyDown={this.myChangeHandler}
      />
    );
  };

  render() {
    return (
      <div>
        <label htmlFor="taskInput">
          {this.inputField()}
          <button onClick={this.AddTask}>Create task</button>
        </label>
        <ul className={UlClass}>
          {taskStorage.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Tasks;

/* 
{taskArray.map((value, index) => (
<li key={index}>{value}</li>
))}
*/
