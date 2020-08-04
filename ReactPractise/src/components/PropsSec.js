import React from "react";
import moment from "moment";
function Content(props) {
  let time = moment().format("dddd");
  let today = () => {
    let dayNr = new Date().getDay() - 1; //without moment.js
    let daysArray = [
      "buy groceries",
      "clean kitchen",
      "clean living room",
      "clean bathroom",
      "water plants",
      "go out with friends",
      "work out",
    ];
    return daysArray[dayNr];
  };

  return (
    <>
      <h3>{props.Text}</h3>
      <p>
        Every {time} i have to {today()}
      </p>
      <div>{props.children}</div>
    </>
  );
}
const PropsSec = <Content Text="Prop leaning">someday</Content>;

export default PropsSec;
