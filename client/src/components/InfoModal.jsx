import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { FiGithub, FiCoffee } from 'react-icons/fi';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '40rem',
        width: '90%',
        borderRadius: '10px',
        padding: '2rem',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        zIndex: 9999,
    },
};

Modal.setAppElement('#root');

const InfoModal = ({ isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Information Modal"
        >
            <div className="flex justify-end">
                <button
                    className="bg-transparent border-none text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={closeModal}
                >
                    <FaTimes />
                </button>
            </div>
            <div className="text-center py-4">
                <h2 className="text-xl font-bold mb-4">Welcome to SG Mental Health Chatbot</h2>
                <p className="mb-6">
                    This chatbot is not a substitute for professional mental health advice. If you need immediate assistance, please contact the Samaritans of Singapore hotline at 1800-221-4444 or visit their website <a href="https://www.sos.org.sg/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" > https://www.sos.org.sg/ </a>
                </p>
                <br />
                <p className="mb-6">
                    Your donations go towards maintaining our servers and keeping the chatbot running. If you would like to support us, please consider buying a 
                    <a href="https://ko-fi.com/jovensoh" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" > Ko-fi <FiCoffee size={24} /> </a>
                </p>
                <br />
                <p className="text-sm text-gray-500 mb-2">
                    All donations go directly to server costs and maintenance. Thank you for your support!
                </p>
            </div>
        </Modal>
    );

};

export default InfoModal;
