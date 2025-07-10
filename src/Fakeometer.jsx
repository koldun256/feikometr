import React from "react";

export default function Fakeometer({ score }) {
  return (
    <div className="mt-6 p-4 border border-[#2e4029] bg-[#fffdeb] text-center">
      <div className="text-lg font-bold">Средняя достоверность</div>
      <div className="text-3xl mt-2">{score}%</div>
      <div className="mt-1 text-sm">(по шкале научного прибора)</div>
    </div>
  );
}
