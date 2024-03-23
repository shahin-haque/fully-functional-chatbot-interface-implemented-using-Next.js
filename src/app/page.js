"use client";
import { useState, useEffect } from "react";
import MessageArea from "../../components/MessageArea";
import MessageInput from "../../components/MessageInput";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [isAITyping, setIsAITyping] = useState(false);

  const sendMessage = (message) => {
    if (message.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const userMessage = {
        sender: "You",
        time: currentTime,
        content: message,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      setIsAITyping(true); // AI is typing animation

      // Simulate AI response after a delay
      setTimeout(() => {
        const aiResponse = {
          sender: "AI",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          content: "This is AI response",
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
        setIsAITyping(false); // AI finished typing
      }, 2000);
    }
  };

  return (
    <main className="container">
      <MessageArea messages={messages} isAITyping={isAITyping} />
      <MessageInput sendMessage={sendMessage} />
    </main>
  );
}
