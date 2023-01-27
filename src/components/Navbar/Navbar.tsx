import React, { useState } from "react";

import "./navbar.css";

import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="search">
            <input
              className="input"
              placeholder="Введите запрос"
            />
            <div className="searches">
              <KeyboardIcon/>
              <CloseIcon/>
            </div>
          </div>
          <div className="right">
            <div className="div">
              <KeyboardVoiceIcon/>
            </div>
            <div className="buttons">
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
            </div>
            <div className="user">
              <NotificationsActiveIcon/>
              <div className="avatar">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;