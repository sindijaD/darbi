import React from "react";
import "../css/contacts.scss";
import {
  ImFacebook2,
  ImLinkedin,
  ImYoutube,
  ImInstagram,
} from "react-icons/im";

const Contacts = () => {
  return (
    <>
      <h2>Contacts</h2>
      <div className="contacts__links">
        <a
          href="https://www.facebook.com/austris.daugulis"
          title="Facebook"
          className="links facebook"
        >
          <ImFacebook2 />
        </a>
        <a
          href="https://www.instagram.com/austrisd/"
          title="Instagram"
          className="links instagram"
        >
          <ImInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/austris-daugulis-2646181b1/"
          className="links linkIN"
          title="LinkedIN"
        >
          <ImLinkedin />
        </a>
        <a
          href="https://www.youtube.com/channel/UCgUW3hOunZHvcIhq2E5kWUA?view_as=subscriber"
          className="links youTube"
          title="youTube"
        >
          <ImYoutube />
        </a>
      </div>
    </>
  );
};

export default Contacts;
