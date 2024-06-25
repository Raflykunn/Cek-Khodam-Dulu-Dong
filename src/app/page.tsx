"use client";

// pages/index.tsx
import { useState } from "react";
import { Khodam, commonKhodams, rareKhodams } from "./khodam";

const getRandomKhodam = (name: string): Khodam => {
  if (name.trim().toLowerCase() === "rafly") {
    return { name: "Raja Para Khodam", rarity: "legendary" };
  }

  const rareProbability = 0.5; // 50% untuk mendapatkan khodam rare

  if (Math.random() < rareProbability) {
    const randomIndex = Math.floor(Math.random() * rareKhodams.length);
    return rareKhodams[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * commonKhodams.length);
    return commonKhodams[randomIndex];
  }
};

const Home = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [khodam, setKhodam] = useState<Khodam | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const result = getRandomKhodam(name);
      setKhodam(result);
      setLoading(false);
    }, 5000); // simulasi waktu loading
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-950">
      <div className="bg-purple-700 p-8 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-50">Cek Khodam</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan Nama Anda"
            className="border border-gray-300 rounded p-2 w-full mb-4"
            required
            autoFocus
          />
          <div className="flex justify-center">
            {loading ? (
              <img
                className="my-4"
                src="kucing-joget.gif"
                width={150}
                height={200}
                alt="Loading..."
              />
            ) : (
              <img
                className="my-4"
                src="cat.jpg"
                width={200}
                height={200}
                alt="cat"
              />
            )}
          </div>
          {khodam && !loading && (
            <div className="mt-4 text-slate-50">
              <h2 className="text-lg font-semibold">Khodam Anda:</h2>
              <h3 className="text-3xl font-bold mt-2">{khodam.name}</h3>
            </div>
          )}
          <button
            type="submit"
            className="bg-slate-50 text-purple-700 p-2 rounded w-full mt-7"
          >
            Cek Khodam
          </button>
        </form>
        <h1 className="text-xl text-slate-50 font-semibold mt-4">
          &copy; Copyright:2024 | Create by Rafly❤️
        </h1>
      </div>
    </div>
  );
};

export default Home;
