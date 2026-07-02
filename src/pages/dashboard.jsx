import { useState, useEffect } from "react";
import StatsCard from "../components/StatsCard";
import PartnerCard from "../components/PartnerCard";

function Dashboard() {
  const [partners, setPartners] = useState([]);
  const [connectedPartners, setConnectedPartners] = useState([]);

  useEffect(() => {
    const savedPartners =
      JSON.parse(localStorage.getItem("partners")) || [];

    const savedConnected =
      JSON.parse(localStorage.getItem("connectedPartners")) || [];

    setPartners(savedPartners);
    setConnectedPartners(savedConnected);
  }, []);
  const [ selectedView, setSelectedView] = useState("all");
let displayedPartners = partners;

if (selectedView === "connected") {
  displayedPartners = partners.filter((partner) =>
    connectedPartners.includes(partner.name)
  );
}

if (selectedView === "available") {
  displayedPartners = partners.filter(
    (partner) => !connectedPartners.includes(partner.name)
  );
}
  return (
    <div className="min-h-screen bg-black text-white p-8">


      <h1 className="text-5xl font-bold text-green-400 text-center">
        🏋️ FitConnect Dashboard
      </h1>

      <p className="text-center text-gray-400 mt-4 text-xl">
        Welcome Back!
      </p>

      {/* Stats Cards */}
      <div className="flex justify-center gap-6 flex-wrap mt-10">

        <StatsCard
         onClick={() => setSelectedView("all")}
          title="Total Partners"
          value={partners.length}
          icon="👥"
        />

        <StatsCard
        onClick={() => setSelectedView("connected")}
          title="Connected"
          value={connectedPartners.length}
          icon="🤝"
        />

        <StatsCard
          onClick={() => setSelectedView("available")}
          title="Available"
          value={partners.length - connectedPartners.length}
          icon="🔍"
        />

      </div>

    
      <h2 className="text-3xl font-bold text-green-400 text-center mt-12">
        Recent Partners
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {partners.length === 0 ? (
          <p className="text-gray-400">
            No partners available.
          </p>
        ) : (
      displayedPartners.map((partner, index) => (
  <PartnerCard
    key={index}
    name={partner.name}
    fitnessLevel={partner.fitnessLevel}
    goal={partner.goal}
    city={partner.city}
    isConnected={connectedPartners.includes(partner.name)}
    showActions={false}
  />
))
        )}
      </div>

    </div>
  );
}

export default Dashboard;