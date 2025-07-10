import React, { useState } from "react";

export default function TabbedPanel({ linkTab, manualTab }) {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <div className="relative max-w-6xl mx-auto mt-6 bg-[#f5f0dc] border-4 border-[#2e4029] shadow-xl">
      {/* decorative bolts */}
      <div className="absolute top-1 left-1 w-3 h-3 bg-[#2e4029] rounded-full shadow-md" />
      <div className="absolute top-1 right-1 w-3 h-3 bg-[#2e4029] rounded-full shadow-md" />
      <div className="absolute bottom-1 left-1 w-3 h-3 bg-[#2e4029] rounded-full shadow-md" />
      <div className="absolute bottom-1 right-1 w-3 h-3 bg-[#2e4029] rounded-full shadow-md" />

      {/* tab buttons */}
      <div className="flex border-b border-[#2e4029]">
        <button
          className={`px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#2e4029] border-r border-[#2e4029] transition-colors duration-200 ${
            activeTab === "link" ? "bg-[#f5f0dc]" : "bg-[#eae4c8] hover:bg-[#e0dac0]"
          }`}
          onClick={() => setActiveTab("link")}
        >
          Анализ по ссылке
        </button>
        <button
          className={`px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#2e4029] transition-colors duration-200 ${
            activeTab === "manual" ? "bg-[#f5f0dc]" : "bg-[#eae4c8] hover:bg-[#e0dac0]"
          }`}
          onClick={() => setActiveTab("manual")}
        >
          Проверка отзывов
        </button>
      </div>

      {/* tab content */}
      <div className="p-6">
        {activeTab === "link" ? linkTab : manualTab}
      </div>
    </div>
  );
}