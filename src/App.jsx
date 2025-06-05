import React, { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import Chatform from "./components/Chatform";
import Chatmessage from "./components/Chatmessage";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  // console.log(chatHistory);

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "something went wrong");
      console.log(data);

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, no response.";

      updateHistory(text.replace(/\*\*(.*?)\*\*/g, "$1").trim());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* chat Header  */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button className="material-symbols-outlined">
            keyboard_arrow_down
          </button>
        </div>

        {/* chat body */}
        <div className="chatbody">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there <br /> how can i help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <Chatmessage chat={chat} key={index} />
          ))}
        </div>

        {/* chat footer  */}
        <div className="chat-footer">
          <Chatform
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
