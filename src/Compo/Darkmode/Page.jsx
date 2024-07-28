import React, { useState } from "react";
import "./style.css";
export default function Page() {
  const [dark, setdark] = useState(false);
  return (
    <div className="">
      <div className="toggle-container ">
        <label className="toggle-switch">
          <input type="checkbox" onChange={() => setdark(!dark)} />

          <span className="slider"></span>
        </label>
      </div>
      <div className={`${dark? 'dark-mode': 'light-mode'}`}>
        <h1 className="text-2xl">{dark ? "Dark mode" : "Light Mode"}</h1>
        <p className="text-4xl">Hello World!</p>
      </div>
    </div>
  );
}
