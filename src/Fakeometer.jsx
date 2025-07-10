import React from "react";

export default function Fakeometer({ score }) {
  const clampedScore = Math.max(0, Math.min(score, 100));
  const barColor = (percent) => {
    if (percent > 66) return "#2e4029";
    if (percent > 33) return "#a88f3a";
    return "#8b2d2d";
  };

  return (
    <div className="relative bg-[#fffdeb] border-4 border-[#2e4029] px-2 py-4 rounded-md flex flex-col items-center">
      {/* заголовок */}
      <div className="text-xs text-[#2e4029] uppercase tracking-widest mb-3 font-bold">
        Индекс доверия
      </div>

      {/* шкала + риски в горизонтальном блоке */}
      <div className="flex items-end justify-center">
        {/* вертикальная шкала */}
        <div className="relative w-16 h-64 border-2 border-[#2e4029] bg-[#eae4c8] shadow-inner flex items-end">
          <div
            className="w-full transition-all duration-500"
            style={{
              height: `${clampedScore}%`,
              backgroundColor: barColor(clampedScore),
            }}
          />
        </div>
      </div>

      {/* цифровой индикатор - по центру шкалы */}
      <div className="mt-4 text-3xl tracking-widest text-[#2e4029] text-center w-16">
        {clampedScore}%
      </div>

      {/* подписи снизу */}
      <div className="mt-1 text-xs text-[#3f5132] text-center leading-tight">
        REV-SCAN CALIBRATED<br />
        UNIT: FXM-220
      </div>
    </div>
  );
}
