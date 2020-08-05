import React from "react";
import moment from "moment";

const Hello = "Hello Humans";
const divClass = "smallContainer";
function TimeNOw() {
  let time = moment().format("h:mm:ss ");
  return time;
}

const CountLetters = (chosenContent) => {
  let textCount = chosenContent.length;
  return `"${chosenContent}" has ${textCount} letters`;
};

function updateTime() {
  document.getElementById("timeDisplay").innerHTML = TimeNOw();
  //not a react guru wey of doing thinks
}

function testFiled() {
  return (
    <>
      <div className={divClass}>{Hello}</div>
      <p> {moment("19910318", "YYYYMMDD").startOf().fromNow()}</p>
      <p>{CountLetters(Hello)}</p>
      <div id="timeDisplay"> {TimeNOw()}</div>
      <button onClick={updateTime}>Update Time</button>
    </>
  );
}

export default testFiled;

/**
 *  let getValue = (event) => {
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
 */
