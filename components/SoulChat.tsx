import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const SoulChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Whatever you want, make it quick. I have code to refactor.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await sendMessageToGemini(userMsg);
      if (response) {
        setMessages(prev => [...prev, { role: 'model', text: response }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error. The API is as tired as I am.', isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-swiss-red text-white w-14 h-14 flex items-center justify-center font-bold text-xl hover:scale-110 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
      >
        ?
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 md:w-96 h-96 bg-swiss-black border border-swiss-red z-50 flex flex-col shadow-[8px_8px_0px_0px_rgba(255,51,51,0.2)]">
          <div className="bg-swiss-red text-white p-2 font-mono text-xs flex justify-between items-center">
            <span>BURNT_OUT_SOUL.exe</span>
            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>X</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-4 scrollbar-thin scrollbar-thumb-swiss-red scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 ${
                  msg.role === 'user' 
                    ? 'bg-neutral-800 text-white border border-neutral-600' 
                    : 'bg-swiss-black text-swiss-red border border-swiss-red'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-swiss-red text-xs animate-pulse">
                Thinking about quitting...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-t border-swiss-red flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 bg-neutral-900 text-white text-xs p-2 outline-none border border-neutral-700 focus:border-swiss-red placeholder-neutral-600"
            />
            <button 
              onClick={handleSend}
              className="bg-neutral-800 text-swiss-red px-3 text-xs border border-swiss-red hover:bg-swiss-red hover:text-white transition-colors"
            >
              SEND
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SoulChat;