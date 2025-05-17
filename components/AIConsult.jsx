import React, { useState, useEffect, useRef } from 'react';
import { IoIosSend } from 'react-icons/io';

const AIConsult = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { type: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    const aiReply = await getAIReply(userInput);

    setMessages((prev) => [...prev, { type: 'ai', text: aiReply }]);
  };

  const getAIReply = async (prompt) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `AI: Here is a response for "${prompt}"`;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  
          scrollbar-width: none;  
        }
      `}</style>

      <div className="flex flex-col h-screen items-center">
        {/* Chat Area */}
        <div
          className="p-6 space-y-4 overflow-y-auto scrollbar-hide"
          style={{ height: '80%', width: '60%' }}
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
              <div className="bg-purple-100 text-purple-900 rounded-xl p-6 shadow text-center max-w-md w-full">
                <h3 className="font-semibold mb-2 text-lg">How do you search?</h3>
                <p className="text-sm">
                  Simply type your health-related query in the chat box below and hit send. 
                  The AI will analyze your question and provide insights, suggestions, or steps you can take next.
                </p>
              </div>
              <div className="bg-purple-100 text-purple-900 rounded-xl p-6 shadow text-center max-w-md w-full">
                <h3 className="font-semibold mb-2 text-lg">What can you search?</h3>
                <p className="text-sm">
                  Explore symptoms, possible causes, medications, treatments, mental health tips, diet plans, 
                  and get support for chronic illnesses. Your AI consultant is here 24/7.
                </p>
              </div>
              <div className="bg-purple-100 text-purple-900 rounded-xl p-6 shadow text-center max-w-md w-full">
                <h3 className="font-semibold mb-2 text-lg">Stay Motivated</h3>
                <p className="text-sm">
                  Your health journey starts with a single question. 
                  Stay curious, stay informed, and take charge of your wellbeing with confidence.
                </p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-4 rounded-xl shadow break-words ${
                      msg.type === 'user'
                        ? 'bg-purple-600 text-white text-right'
                        : 'bg-purple-100 text-purple-900 text-left'
                    }`}
                    style={{ maxWidth: '70%', width: 'auto', display: 'inline-block' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Field */}
        <div className="h-[20%] flex justify-center items-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask your AI health consultant..."
              className="w-full bg-purple-50 border border-purple-300 rounded-full pl-5 pr-12 py-3 focus:outline-none focus:ring focus:border-purple-500 placeholder-purple-400 text-purple-900"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-800"
            >
              <IoIosSend size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIConsult;
