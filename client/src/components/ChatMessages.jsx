import React, { useState, useEffect, useRef } from 'react';
import './ChatMessages.css';

const ChatMessages = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-messages-container">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-4 ${
            message.sender === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <span
            className={`inline-block py-2 px-4 rounded ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {message.text}
          </span>
        </div>
      ))}
      {isLoading && (
        <div className="p-4 text-left">
          <span className="inline-block py-2 px-4 rounded bg-gray-200 text-black">
            <span className="dot dot-1">.</span>
            <span className="dot dot-2">.</span>
            <span className="dot dot-3">.</span>
          </span>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
