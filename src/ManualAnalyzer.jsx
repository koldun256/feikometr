import React, { useState } from "react";
import VerdictCard from "./VerdictCard";

export default function ManualAnalyzer() {
  const [text, setText] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setScore(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/detect_one_review?` + new URLSearchParams({ review: text }));

      if (!response.ok) throw new Error("Ошибка при анализе текста");

      const data = await response.json();
      const reliability = Math.round(data.reliability * 100);
      setScore(reliability);
    } catch (error) {
      console.error(error);
      alert("Ошибка при получении ответа от сервера.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleCheck} className="mb-6 max-w-md mx-auto">
        <label className="block mb-2 text-center">Введите текст отзыва:</label>
        <textarea
          className="w-full p-2 border border-[#2e4029] bg-[#f5f0dc] h-32 resize-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-[#2e4029] text-white"
          >
            Проверить
          </button>
        </div>
      </form>

      {!loading && score !== null && (
        <VerdictCard text={text} score={score} />
      )}

      {loading && (
        <div className="text-center mt-6 text-[#2e4029]">Анализируем…</div>
      )}
    </div>
  );
}
