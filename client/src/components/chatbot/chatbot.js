import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider"; 
import "react-chatbot-kit/build/main.css";
import "./Chatbox.css"

const Chat = () => {
    return (
      
      <div className="chatting">
        <h1 className="letschat">Lets chat!!</h1>
        <h2>Use the chatbot below to chat to an Atreya professional</h2>
      <div className="chatbox">

   <Chatbot className="chat"
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
      </div>
    );
};

export default Chat;