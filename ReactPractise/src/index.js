import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ClassElement from "./components/ClassElement";


let ReactApp =()=>{
    return<>
      <Header name="Austris Daugulis" position="Front-end developer">
        <p>HTML5,CSS3,javaScrip</p>
      </Header>
      <Main>
        <ClassElement/>
      </Main>
      <Footer
        address=" mail@gmail.com"
        name="Austris Daugulis"
        nr="+371 87654321"
        facebook=""
        twitter=""
        linkIn=""
      />
      </>
}



const rootElement =document.getElementById("root");
ReactDOM.render(<ReactApp/>,rootElement);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
