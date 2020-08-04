import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div className="contactInfo">
        <div className="authorName">
          <p>Created by:</p>
          <p> {props.name}</p>
        </div>
        <div className="authorAddress">
          <p>Email:</p>
          <address>{props.address}</address>
        </div>
        <div>
          <p>Phone number:</p>
          <p> {props.nr}</p>
        </div>
      </div>
      <div className="social links"></div>
    </footer>
  );
};

/*const Footer = (creator) => {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement("p", null, "Austris Daugulis &copy")
  );
};*/

export default Footer;
