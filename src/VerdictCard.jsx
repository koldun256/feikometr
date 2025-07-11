import React from "react";

export default function VerdictCard({ text, score }) {
  const getVerdict = (s) => {
    if (s >= 90) return { label: "НАСТОЯЩИЙ", color: "#2e4029"};
    if (s >= 70) return { label: "СОМНИТЕЛЬНЫЙ", color: "#a88f3a"};
    return { label: "ФЕЙК", color: "#8b2d2d"};
  };

  const verdict = getVerdict(score);

  return (
    <div className="relative border-4 border-[#2e4029] bg-[#fffdeb] shadow-md p-4 rounded-md max-w-xl mx-auto">
      {/* Текст отзыва */}
      <p className="text-base leading-relaxed text-[#2e4029] mb-6">
        {text}
      </p>

      {/* Плашка с вердиктом */}
      <div
        className="absolute bottom-4 left-4 px-3 py-1 rounded-sm text-xs font-bold tracking-wide"
        style={{
          backgroundColor: verdict.color,
          color: "#fff",
        }}
      >
        ВЕРДИКТ: {verdict.label}
      </div>

      {/* Бар надёжности */}
      <div className="mt-8">
        <div className="h-3 w-full bg-[#e0dbc4] rounded">
          <div
            className="h-full rounded"
            style={{
              width: `${score}%`,
              backgroundColor: verdict.color,
            }}
          />
        </div>
        <div className="text-xs text-[#2e4029] mt-1 text-right">
          Надёжность: {score}%
        </div>
      </div>
    </div>
  );
}
