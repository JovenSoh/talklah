export const generateResponse = async (input, conversationHistory = []) => {
  //https://chatbot.irscybersec.ml/api/chat http://localhost:3001/chat
    try {
      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input, conversationHistory }),
      });
  
      if (!response.ok) {
        throw new Error('An error occurred while fetching the response');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching response:', error);
      throw error;
    }
  };
  