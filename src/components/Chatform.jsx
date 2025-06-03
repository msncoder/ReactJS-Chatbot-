import React, { useRef } from "react";

function Chatform({ setChatHistory }) {
  const inpRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inpRef.current.value.trim();
    if (!userMessage) return;
    console.log(userMessage);
    inpRef.current.value = "";
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="message-input"
        required
        placeholder="Message..."
        ref={inpRef}
      />
      <button className="material-symbols-outlined">keyboard_arrow_up</button>
    </form>
  );
}

export default Chatform;
