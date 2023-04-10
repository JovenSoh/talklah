import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import InfoModal from './components/InfoModal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <ChatWindow />
      <InfoModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
