import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { ChatInputProps } from '../../types/chat';

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask TimeMachine CS..."
          disabled={isLoading}
          className="flex-1 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:hover:bg-purple-600"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
}