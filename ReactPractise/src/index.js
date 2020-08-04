import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header name="Austris Daugulis" position="Front-end developer">
      <p>HTML5,CSS3,javaScrip</p>
    </Header>
    <Main />
    <Footer
      address=" mail@gmail.com"
      name="Austris Daugulis"
      nr="+371 87654321"
      facebook=""
      twitter=""
      linkIn=""
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
