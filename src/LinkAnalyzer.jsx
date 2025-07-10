import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import Fakeometer from "./Fakeometer";

export default function LinkAnalyzer() {
  const [link, setLink] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setReviews([]);
    // fake API simulation
    setTimeout(() => {
      setReviews([
        { text: "Отличный телефон, все как в описании.", score: 92 },
        { text: "Очень много неработающих функций.", score: 87 },
        { text: "Советую к приобретению!", score: 90 },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">Ссылка на товар:</label>
        <input
          type="url"
          className="w-full p-2 border border-[#2e4029] bg-[#f5f0dc]"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-[#2e4029] text-white"
        >
          Проверить
        </button>
      </form>
      {loading ? (
        <div>Загрузка…</div>
      ) : (
        <>
          {reviews.map((r, i) => (
            <ReviewCard key={i} text={r.text} score={r.score} />
          ))}
          {reviews.length > 0 && <Fakeometer score={
            Math.round(reviews.reduce((s, r) => s + r.score, 0) / reviews.length)
          } />}
        </>
      )}
    </div>
  );
}