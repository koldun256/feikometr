import React from "react";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f0dc] text-[#2e4029] font-retro">
      <header className="p-4 border-b border-[#2e4029] flex items-center justify-between">
        <h1 className="text-2xl font-bold">ФЕЙКОМЕТР</h1>
        <div className="text-sm">Научный подход к фейковым отзывам</div>
      </header>
      <main className="p-6 max-w-3xl mx-auto">{children}</main>
      <footer className="p-4 border-t border-[#2e4029] text-center text-sm mt-8">
        © 2025 Фейкометр. Все фейки найдены.
      </footer>
    </div>
  );
}