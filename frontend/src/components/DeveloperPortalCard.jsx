import { Link } from "react-router-dom";

const HomePage = () => {
  const cards = [
    { title: "Aadhar Verification", description: "Checks for presentation attacks like picture and replay attack.", icon: "📜", color: "#7C3AED" },
    { title: "VoterID Verification", description: "Analyzes document metadata and checks for forgery.", icon: "🆔", color: "#F59E0B" },
    { title: "Electricity Bill Verification", description: "Detects age and gender from the image.", icon: "🔌", color: "#2563EB" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex flex-col items-center">
      <div className="flex gap-8 mt-24 flex-wrap justify-center">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 w-80 text-center border-t-4" style={{ borderColor: card.color }}>
            <div className="text-5xl mb-4" style={{ color: card.color }}>{card.icon}</div>
            <h2 className="text-xl font-bold text-black">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
            <Link to="/upload">
              <button className="mt-4 px-4 py-2 text-white rounded-lg" style={{ backgroundColor: card.color }}>
                Verify
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
