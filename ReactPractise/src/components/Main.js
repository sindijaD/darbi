import React, { useState, useEffect } from "react";
import Members from "./Members";
import Tasks from "./Tasks";
import testFiled from "./testFiled";
import PropsSec from "./PropsSec";

const Main = () => {
  const [ResourceType, setResourceType] = useState("post");
  useEffect(() => {}, [ResourceType]);

  return (
    <main>
      <nav>
        <button onClick={() => setResourceType(Members)}>Members</button>
        <button onClick={() => setResourceType(<Tasks />)}>Tasks</button>
        <button onClick={() => setResourceType("About")}>About</button>
        <button onClick={() => setResourceType(testFiled)}>testFiled</button>
        <button onClick={() => setResourceType(PropsSec)}>Props</button>
      </nav>
      <section className="definedContent">{ResourceType}</section>
    </main>
  );
};
export default Main;
