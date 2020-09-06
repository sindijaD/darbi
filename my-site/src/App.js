import React, { useState, useEffect } from "react";
import "./css/app.scss";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Code from "./components/Code";
import Gallery from "./components/Gallery";
import { BsChevronDoubleLeft } from "react-icons/bs";

const App = () => {
  const [ResourceType, setResourceType] = useState(AboutMe);
  useEffect(() => {}, [ResourceType]);
  let [status, setStatus] = useState(`containerShow`);
  let [BtnStyle, setBtnStyle] = useState("");

  const hideSidebar = () => {
    if (status === `containerShow`) {
      setStatus((status = `containerHide`));
      setBtnStyle((BtnStyle = { transform: "rotate(180deg)" }));
    } else {
      setStatus((status = `containerShow`));
      setBtnStyle((BtnStyle = { transform: "rotate(0deg)" }));
    }
  };

  return (
    <>
      <aside className={`aside__Container ${status}`}>
        <button className="aside__hide__btn" onClick={hideSidebar}>
          <BsChevronDoubleLeft style={BtnStyle} />
        </button>
        <div className="aside__Avatar"></div>
        <h1>AUSTRIS DAUGULIS</h1>
        <p className="aside__jobTitle">Front-end Developer</p>
        <svg height="5" width="200">
          <line
            x1="0"
            y1="0"
            x2="200"
            y2="0"
            stroke="#748ba5"
            strokeWidth="5px"
          />
        </svg>
        <nav>
          <button onClick={() => setResourceType(AboutMe)}>ABOUT ME</button>
          <button onClick={() => setResourceType(<Skills />)}>SKILLS</button>
          <button onClick={() => setResourceType(Portfolio)}>PORTFOLIO</button>
          <button onClick={() => setResourceType(Gallery)}>GALLERY</button>
          <button onClick={() => setResourceType(Code)}>CODE CHALLENGES</button>
          <button onClick={() => setResourceType(Contacts)}>CONTACTS</button>
        </nav>
        <footer>
          Made by Austris Daugulis
          <br /> 2020&copy;
        </footer>
      </aside>
      <main className="main__Container">{ResourceType}</main>
    </>
  );
};

export default App;
