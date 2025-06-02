import React from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import Chatform from "./components/Chatform";

function App() {
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* chat Header  */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button class="material-symbols-outlined">keyboard_arrow_down</button>
        </div>

        {/* chat body */}
        <div className="chatbody">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there <br /> how can i help you today?
            </p>
          </div>

          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* chat footer  */}
        <div className="chat-footer">
          <Chatform />
        </div>
      </div>
    </div>
  );
}

export default App;
