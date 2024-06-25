// pages/index.tsx
import { useState } from "react";

interface Khodam {
  name: string;
  rarity: "common" | "rare";
}

const khodams: Khodam[] = [
  { name: "Khodam A", rarity: "common" },
  { name: "Khodam B", rarity: "common" },
  { name: "Khodam C", rarity: "common" },
  { name: "Khodam Rare A", rarity: "rare" },
  { name: "Khodam Rare B", rarity: "rare" },
];

const getRandomKhodam = () => {
  const randomIndex = Math.floor(Math.random() * khodams.length);
  return khodams[randomIndex];
};

const Home = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [khodam, setKhodam] = useState<Khodam | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const result = getRandomKhodam();
      setKhodam(result);
      setLoading(false);
    }, 2000); // simulasi waktu loading
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Cek Khodam</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan Nama Anda"
            className="border border-gray-300 rounded p-2 w-full mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Cek Khodam
          </button>
        </form>
        {loading && <p className="mt-4">Loading...</p>}
        {khodam && !loading && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Nama Khodam Anda:</h2>
            <p>
              {khodam.name} ({khodam.rarity})
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
