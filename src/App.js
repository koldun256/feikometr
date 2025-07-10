import React, { useState } from "react";
import AppLayout from "./AppLayout";
import TabsSwitcher from "./TabsSwitcher";
import LinkAnalyzer from "./LinkAnalyzer";

const ManualCheck = () => (
  <div className="text-center text-gray-600 mt-10">
    Функция «Проверка отзыва» скоро будет доступна.
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <AppLayout>
      <TabsSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "link" ? <LinkAnalyzer /> : <ManualCheck />}
    </AppLayout>
  );
}
