import React, { useState, useEffect } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { generateResponse } from '../api/openai';
import therapist1 from '../images/therapist1.png';
import therapist2 from '../images/therapist2.png';
import therapist3 from '../images/therapist3.png';
import therapist4 from '../images/therapist4.png';
import { FiGlobe, FiGithub, FiCoffee } from 'react-icons/fi';

const therapistNames = [
  'Bishan',
  'Marina',
  'Sentosa',
  'Kallang',
  'Yishun',
  'Jelutong',
  'Pasir',
  'Ubin',
  'Serangoon',
  'Jurong',
  'Punggol',
  'Hougang',
  'Tampines',
  'Woodlands',
  'Clementi'
];

const getRandomTherapistName = () => {
  return therapistNames[Math.floor(Math.random() * therapistNames.length)];
};

const therapistImages = [therapist1, therapist2, therapist3, therapist4];

const getRandomTherapistImage = () => {
  return therapistImages[Math.floor(Math.random() * therapistImages.length)];
};

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [therapistImage, setTherapistImage] = useState(getRandomTherapistImage());
  const [therapistName, setTherapistName] = useState(getRandomTherapistName());

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text,
        sender,
      },
    ]);
  };

  const handleUserMessage = async (message) => {
    addMessage(message, 'user');
    setConversationHistory((prevHistory) => prevHistory.concat(message));
  
    setIsLoading(true); // Add this line
  
    const response = await generateResponse(message, conversationHistory);
    setIsLoading(false); // Add this line
  
    addMessage(response, 'bot');
    setConversationHistory((prevHistory) => prevHistory.concat(response));
  };
  

  useEffect(() => {
    const welcomeMessage =
      'Hello! I am here to help you with stress and mental health concerns. How can I help you today?';
    addMessage(welcomeMessage, 'bot');
    setConversationHistory((prevHistory) => prevHistory.concat(welcomeMessage));
  }, []);

  return (
    <div className="flex-auto bg-white w-11/12 sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto my-10 p-6 shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={therapistImage}
          alt={therapistName}
        />
        <h1 className="text-xl font-semibold">{therapistName}</h1>
      </div>
      <div className="min-h-[24rem] max-h-[24rem] overflow-y-auto bg-white rounded shadow mb-4">
      <ChatMessages messages={messages} isLoading={isLoading} />

      </div>
      <ChatInput onSubmit={handleUserMessage} />
      <div className="icons-container flex justify-center mt-4 mr-4 mb-6 space-x-30">
        <a href="https://jovensoh.github.io" target="_blank" rel="noopener noreferrer" className="">
          <FiGlobe size={24} />
        </a>
        <a href="https://github.com/jovensoh" target="_blank" rel="noopener noreferrer" className="">
          <FiGithub size={24} />
        </a>
        <a href="https://ko-fi.com/jovensoh" target="_blank" rel="noopener noreferrer" className="">
          <FiCoffee size={24} />
        </a>
      </div>
    </div>
  );
};

export default ChatWindow;
