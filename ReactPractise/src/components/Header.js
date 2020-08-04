import React from "react";

const Header = (props) => (
  <header className="App-header">
    <h1>{props.name}</h1>
    <h2>{props.position}</h2>
    {props.children}
  </header>
);
/*function Header(props) {
  return (
    <header className="App-header">
      <h1>{props.name} site</h1>
    </header>
  );
}
*/
export default Header;
