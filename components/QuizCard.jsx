"use client";
import { useState } from "react";

export default function QuizCard({ question, options, answer, explanation }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <p className="font-bold text-lg">{question}</p>
      <div className="mt-3 space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full p-2 rounded-xl border ${
              selected === i
                ? i === answer
                  ? "bg-green-200 border-green-500"
                  : "bg-red-200 border-red-500"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <p className="mt-3 text-sm text-gray-600">{explanation}</p>
      )}
    </div>
  );
}

