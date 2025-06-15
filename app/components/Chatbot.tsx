'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

const sendMessage = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, `You: ${input}`];
  setMessages(newMessages);
  setIsLoading(true);

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: input }],
      }),
    });

    const data = await res.json();
    setMessages([...newMessages, `Ashmaan: ${data.reply}`]);
  } catch (err) {
    setMessages([...newMessages, 'Ashmaan: Error getting response.']);
  } finally {
    setIsLoading(false);
    setInput('');
  }
};

  return (
    <section className="max-w-2xl mx-auto px-4 py-10 bg-gray-100/40 shadow-xl rounded-lg transition ease-in duration-700 hover:bg-gray-100/100 hover:scale-105">
      <div>
        <p>hi</p>
      </div>
      <h2 className="text-2xl font-bold mb-4 bg-white rounded-lg p-4 m-0">Ask Ashmaan 🤖</h2>
      <div className="border-t rounded-lg p-4 space-y-2 h-64 overflow-y-auto bg-white dark:bg-zinc-800 text-sm">
        {messages.map((msg, i) => (
          <p key={i} className="whitespace-pre-wrap">{msg}</p>
        ))}
        {isLoading && <p className="text-gray-500">Ashmaan is typing...</p>}
      </div>
      <div className=" rounded-lg flex">
        <div className=" border-t border-gray-300 hover:border-black flex flex-grow">
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-grow p-2 bg-white dark:bg-zinc-900"
          />
          <button
          onClick={sendMessage}
          className="px-4 py-2 bg-white text-black hover:bg-gray-100"
          >
          Send
          </button>
        </div>
        <div className="w-8 m-0">
          hi
        </div>
      </div>
    </section>
  );
}
