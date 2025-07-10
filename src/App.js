import React from "react";
import AppLayout from "./AppLayout";
import LinkAnalyzer from "./LinkAnalyzer";
import BackgroundCanvas from "./BackgroundCanvas";

const ManualCheck = () => (
  <div className="text-center text-gray-600 mt-10">
    Функция «Проверка отзыва» скоро будет доступна.
  </div>
);

export default function App() {
  let linkTab = <LinkAnalyzer />
  let manualTab = <>Хуй</>

  return (
    <>
    <BackgroundCanvas />
    <AppLayout linkTab={linkTab} manualTab={manualTab} />
    </>
  );
}
