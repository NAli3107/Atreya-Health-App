import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider"; 
import "react-chatbot-kit/build/main.css";

// you can write any name
// then we import the 
// this one and this one
//understa
// then we call the Chatbot component from  this library this one 
// clear? understand? keep the work here ive got the file saved its fine in a another file 
// you understand? we called the function Chatbot yes perfect dont remove the text
// then we have create three file names are ActionProvider.js,config.js,Messageparser.js this
// one right? yes then we import the three files in this file check above 
// then we pass the class to chatbot understand? what about backend did you write anything in there
// thats fine thank you appreciate 
// read the doc only 2 pages okay show me the two pages again oaky yes bro complete the oder give me 
// yes will do feedback and complete order thank you thanks bro no problem
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