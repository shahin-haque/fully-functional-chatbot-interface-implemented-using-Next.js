import React, { useState } from "react";

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="message">
      <form action="" className="message-input">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        <button type="submit" onClick={handleSubmit}>
          Ask
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
