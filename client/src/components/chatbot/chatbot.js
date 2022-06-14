import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider"; 
import "react-chatbot-kit/build/main.css";


const Chat = () => {
    return (
      <div>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    );
};

export default Chat;