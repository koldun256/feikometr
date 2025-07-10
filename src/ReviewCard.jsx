import React from "react";

export default function ReviewCard({ text, score }) {
  return (
    <div className="border border-[#2e4029] p-3 mb-2 bg-[#fffdeb]">
      <p>{text}</p>
      <div className="mt-1 text-right font-bold">Достоверность: {score}%</div>
    </div>
  );
}