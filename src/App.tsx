import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageHistory from './components/MessageHistory';
import ChatInput from './components/ChatInput';
import { Message, ChatState } from './types';
import { sendMessage } from './services/api';
import { Contatos } from './components/Contatos';

function App() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    persona: 'Linkedin'
  });

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    try {
      // Call API
      const response = await sendMessage(text);

      // Add bot response
      const botMessage: Message = {
        id: uuidv4(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isLoading: false,
      }));
    } catch (error) {
      // Add error message
      const errorMessage: Message = {
        id: uuidv4(),
        text: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.',
        sender: 'bot',
        timestamp: new Date(),
      };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
      }));
      console.error(error)
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-1 flex flex-col justify-center max-w-3xl w-full mx-auto p-4 md:p-6">
        <div className="flex flex-col h-full max-h-[calc(100vh-180px)] space-y-4">
          <Contatos />
          <MessageHistory 
            messages={chatState.messages} 
            isLoading={chatState.isLoading} 
          />
          <ChatInput 
            onSendMessage={handleSendMessage} 
            isLoading={chatState.isLoading} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;