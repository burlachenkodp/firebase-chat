import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type smth..." />
      <div className="send">
        <img src={Img} alt="img" />
        <input id="fileSend" type="file" style={{ display: "none" }} />
        <label htmlFor="fileSend">
          <img src={Attach} alt="attach" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
