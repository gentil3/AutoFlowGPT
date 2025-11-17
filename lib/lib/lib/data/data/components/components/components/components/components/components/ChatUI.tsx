"use client";

interface Message {
  role: string;
  content: string;
}

interface Props {
  messages: Message[];
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
  loading: boolean;
}

export default function ChatUI({
  messages,
  input,
  setInput,
  onSend,
  loading
}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-slate-800 dark:text-slate-100 text-gray-800"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-slate-800 px-4 py-2 rounded-2xl text-sm">
              Typing...
            </div>
          </div>
        )}
      </div>
      <div className="border-t border-gray-200 dark:border-slate-800 p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Ask about automation..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={onSend}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-60 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
