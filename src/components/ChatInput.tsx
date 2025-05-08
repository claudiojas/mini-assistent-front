import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="flex-1 bg-gray-700 text-white rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={isLoading}
        aria-label="Mensagem"
      />
      <button
        type="submit"
        className={`bg-blue-600 hover:bg-blue-700 p-3 rounded-md text-white flex items-center justify-center transition-colors ${
          isLoading || !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isLoading || !message.trim()}
        aria-label="Enviar mensagem"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;