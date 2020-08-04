import React, { createElement } from "react";

const inputArray = [];

let content = () => {
  let getValue = (event) => {
    let x = document.querySelector("#loc");
    let outputLoc = document.querySelector("#outputLoc");

    if (event.which === 13) {
      inputArray.push(x.value);
      console.log(inputArray);
      x.value = "";
      event.preventDefault();
    }
  };

  return (
    <form>
      <h1>Hello</h1>
      <p>Enter your name:</p>
      <input onKeyDown={getValue} id="loc" type="text" />
      <ul id="outputLoc"></ul>
    </form>
  );
};

let testFiled = content;

export default testFiled;
