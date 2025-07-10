import React from "react";

export default function ReviewCard({ text, score }) {
  const getBarColor = (score) => {
    if (score >= 90) return "bg-green-700";
    if (score >= 70) return "bg-yellow-600";
    return "bg-red-700";
  };

  return (
    <div className="relative border border-[#2e4029] p-4 mb-4 bg-[#fffdeb] shadow-md transition-shadow duration-200">
      <p className="text-lg leading-snug mb-4 mt-2">{text}</p>
      <div className="h-3 w-full bg-[#e0dbc4]">
        <div
          className={`${getBarColor(score)} h-full`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
