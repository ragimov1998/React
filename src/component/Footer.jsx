import React from "react";

function Footer() {
  const FooterData = [
    {
      contact: "Copyright © 2021 All rights reserved.",
      icon1: "fa-brands",
      icon11: "fa-github fa-flip",
      icon2: "fa-brands",
      icon22: "fa-twitter fa-bounce",
      icon3: "fa-solid",
      icon33: "fa-basketball fa-spin",
      source: "Source code available",
    },
  ];
  return (
    <section className="footer">
      {FooterData.map((item) => (
        <div className="footer-container">
          <p>{item.contact}</p>
          <span>
            <i className={item.icon1 + " " + item.icon11}></i>
            <i className={item.icon2 + " " + item.icon22}></i>
            <i className={item.icon3 + " " + item.icon33}></i>
          </span>

          <p>{item.source}</p>
        </div>
      ))}
    </section>
  );
}

export default Footer;
