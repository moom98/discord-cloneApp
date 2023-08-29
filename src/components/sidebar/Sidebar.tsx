import React from "react";
import "./Sidebar.scss";
import SidebarChannel from "./SidebarChannel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

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
          <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebar__addChannel" />
          </div>

          <div className="sidebar__channelList">
            <SidebarChannel />
          </div>

          <div className="sidebar__footer">
            <div className="sidebar__account">
              <img src="./vite.svg" alt="" />
              <div className="sidebar__accountName">
                <h4>moom98</h4>
                <span>#8162</span>
              </div>
            </div>

            <div className="sidebar__voice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
