import React from "react";

export default function TabsSwitcher({ activeTab, onTabChange }) {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        className={`px-4 py-2 border ${
          activeTab === "link" ? "bg-[#2e4029] text-white" : "bg-[#e0dbc4]"
        }`}
        onClick={() => onTabChange("link")}
      >
        Анализ по ссылке
      </button>
      <button
        className={`px-4 py-2 border ${
          activeTab === "manual" ? "bg-[#2e4029] text-white" : "bg-[#e0dbc4]"
        }`}
        onClick={() => onTabChange("manual")}
      >
        Проверка отзыва
      </button>
    </div>
  );
}
