import React from "react";

function Members() {
  const Members = ["Josh", "Mark", "Toms", "Jonas", "Zach", "mosh"];

  return (
    <section className="TeamMembers">
      <ul>
        {Members.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </section>
  );
}

export default Members;
