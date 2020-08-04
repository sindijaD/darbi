import React, { Component } from "react";

var taskStorage = [];

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { TaskValue: "" };
    this.fileRef = React.createRef();
  }
  myChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({ TaskValue: event.target.value });
    event.preventDefault();
  };
  AddTask = () => {
    let inputValue = this.state.TaskValue;
    if (inputValue === "") return;
    taskStorage.push(inputValue);
    this.setState(taskStorage);
    this.fileRef.current.value = "";
    inputValue = "";
    console.log(taskStorage);
  };
  render() {
    return (
      <div>
        <label htmlFor="taskInput">
          <input
            type="text"
            name="taskInput"
            id="taskInput"
            ref={this.fileRef}
            placeholder="Write task here"
            onChange={this.myChangeHandler}
          />
          <button onClick={this.AddTask}>Create task</button>
        </label>
        <ul>
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
