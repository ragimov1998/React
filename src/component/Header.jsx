import React, { useState } from "react";

function Header({ list }) {
  const [listli, katalizator] = useState("");
  return (
    <section className="header">
      <div className="header-container">
        <ul>
          {list.map((item, index) => (
            <li
              className={`${listli === item ? "active" : ""} ${
                listli === "" ? katalizator(list[0]) : ""
              }`}
              onClick={() => katalizator(item)}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Header;
