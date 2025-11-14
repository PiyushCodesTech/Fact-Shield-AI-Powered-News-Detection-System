import { useState } from "react";

export default function TextInputPanel({ onAnalyze, error }) {
  const [text, setText] = useState("");

  const onSubmit = () => {
  if (!text.trim()) return;
  onAnalyze(text);     // calling the correct prop
};

  return (
    <div className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-6 shadow-lg">

      <h2 className="text-xl font-semibold text-gray-200 flex items-center gap-2 mb-4">
        <span className="text-cyan-400">⚡</span> Analyze News
      </h2>

      <textarea
        className="w-full h-56 bg-black border border-gray-700 p-4 rounded-xl text-gray-200 focus:outline-none focus:border-cyan-400"
        placeholder="Paste the news article or text you want to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {error && (
        <p className="text-red-400 text-sm mt-2">
          {error}
        </p>
      )}

      <button
        className="w-full mt-5 bg-cyan-500 hover:bg-cyan-600 text-black cursor-pointer font-semibold py-2 rounded-xl shadow transition"
        onClick={onSubmit}
      >
        Analyze News
      </button>

      <p className="mt-4 text-xs text-gray-500 flex items-center gap-1">
        🔒 Privacy Notice: Your text is analyzed locally using an AI classifier.
      </p>
    </div>
  );
}
