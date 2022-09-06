import React from "react";
import Add from "../img/cam.png";
import Cam from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";


const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>JANET</span>
        <div className="chatIcons">
          <img src={Add} alt="d" />
          <img src={More} alt="2" />
          <img src={Cam} alt="as" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
