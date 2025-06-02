import React from "react";

function Chatform() {
  return (
    <form action="#" className="chat-form">
      <input
        type="text"
        className="message-input"
        required
        placeholder="Message..."
      />
      <button class="material-symbols-outlined">keyboard_arrow_up</button>
    </form>
  );
}

export default Chatform;
