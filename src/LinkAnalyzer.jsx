import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import Fakeometer from "./Fakeometer";
import WaveLoader from "./WaveLoader";

export default function LinkAnalyzer() {
  const [link, setLink] = useState("");
  const [reviews, setReviews] = useState([]);
  const [avgReliability, setAvgReliability] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setReviews([]);
    setAvgReliability(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/detect_review_from_link?` + new URLSearchParams({ url: link }));

      if (!response.ok) {
        throw new Error("Ошибка при запросе к серверу.");
      }

      const data = await response.json();
      console.log(data);
      setReviews(data.reviews);
      setAvgReliability(Math.round(data.avg_reliability * 100));
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось получить данные. Проверьте ссылку или попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6 max-w-md mx-auto">
        <label className="block mb-2 text-center">Ссылка на товар:</label>
        <div className="flex items-center gap-2">
          <input
            type="url"
            className="flex-grow p-2 border border-[#2e4029] bg-[#f5f0dc]"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#2e4029] text-white"
          >
            Проверить
          </button>
        </div>
      </form>

      {loading ? (
        <WaveLoader /> 
      ) : (
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
            {reviews.map((r) => (
              <ReviewCard
                key={r.review_id}
                text={r.review_body}
                score={Math.round(r.reliability * 100)}
              />
            ))}
        </div>
        <div>
          {avgReliability !== null && (
            <Fakeometer score={avgReliability} />
          )}
        </div>
      </div>
      )}
    </div>
  );
}
