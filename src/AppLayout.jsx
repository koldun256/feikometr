import React from "react";
import TabbedPanel from "./TabbedPanel";

export default function AppLayout({ linkTab, manualTab }) {
  return (
    <div className="relative z-10 flex flex-col min-h-screen bg-transparent text-[#2e4029] font-retro">
      <header className="z-20 p-4 border-b border-[#2e4029] bg-[#f5f0dc]/90 backdrop-blur-sm flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-[#2e4029]" />
          <h1 className="text-2xl font-bold uppercase tracking-wider">ФЕЙКОМЕТР</h1>
        </div>
        <div className="text-xs text-[#3f5132] mt-2 md:mt-0 md:text-right tracking-tight">
          unit: REV-SCN-092<br className="hidden md:block" />mode: realtime | status: calibrated
        </div>
      </header>

      <main className="z-10 flex-grow px-4 py-6">
        <TabbedPanel linkTab={linkTab} manualTab={manualTab} />
      </main>

      <footer className="z-20 p-4 border-t border-[#2e4029] bg-[#f5f0dc]/90 backdrop-blur-sm text-center text-sm">
        © 2025 Фейкометр. Все фейки найдены.
      </footer>
    </div>
  );
}