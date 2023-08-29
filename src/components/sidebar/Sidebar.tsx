import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <div className="serverIcon">
          <img src="./assets/logo.svg" alt="" />
        </div>
      </div>
      <div className="sidebar__right">
        <div className="sidebar__top">
          <h3>discord</h3>
        </div>
      </div>
    </div>
  );
}
