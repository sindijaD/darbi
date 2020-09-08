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

  let [Active, setActive] = useState("inActive");
  let change = () => {
    setActive((Active = "Active"));
  };

  let [status, setStatus] = useState(`containerShow`);
  let [BtnStyle, setBtnStyle] = useState("");
  const hideSidebar = () => {
    if (status === `containerShow` && window.innerWidth <= 1200) {
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
          <button
            className={Active}
            onClick={() => {
              setResourceType(AboutMe);
              setActive((Active = "Active"));
              hideSidebar();
            }}
          >
            ABOUT ME
          </button>
          <button
            className={Active}
            onClick={() => {
              setResourceType(<Skills />);
              setActive((Active = "Active"));
              hideSidebar();
            }}
          >
            SKILLS
          </button>
          <button
            onClick={() => {
              setResourceType(Portfolio);
              hideSidebar();
            }}
          >
            PORTFOLIO
          </button>
          <button
            onClick={() => {
              setResourceType(Gallery);
              hideSidebar();
            }}
          >
            GALLERY
          </button>
          <button
            onClick={() => {
              setResourceType(Code);
              hideSidebar();
            }}
          >
            CODE CHALLENGES
          </button>
          <button
            onClick={() => {
              setResourceType(Contacts);
              hideSidebar();
            }}
          >
            CONTACTS
          </button>
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
