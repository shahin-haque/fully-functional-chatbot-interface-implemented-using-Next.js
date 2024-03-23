import React, { useRef, useEffect } from "react";

const MessageArea = ({ messages, isAITyping }) => {
  const messageAreaRef = useRef(null);

  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messageAreaRef} className="messaging-area">
      {messages.length <= 0 ? (
        <p className="intro-ai">
          <span style={{ fontSize: "35px" }}> &#10035;</span> What can i help
          you with today?
        </p>
      ) : (
        ""
      )}
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.sender === "You" ? "sent" : "received"
          }`}
        >
          <div className="message-info">
            <div className="sender-name">{message.sender}</div>
            <div className="sent-time">{message.time}</div>
          </div>
          <div className="message-content">
            <p>{message.content}</p>
          </div>
        </div>
      ))}
      {isAITyping && (
        <div className="message received">
          <div className="message-info">
            <div className="sender-name">AI</div>
            <div className="sent-time">Typing...</div>
          </div>
          <div className="message-content typing">
            <p>AI is typing...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageArea;
