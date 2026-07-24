import { useEffect, useState } from "react";
import API from "../api/axios";
import PartnerCard from "../components/PartnerCard";

function Profile() {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPartners = async () => {
    try {
      setLoading(true);

      const response = await API.get("/partners");

      setPartners(response.data.partners);
      setFilteredPartners(response.data.partners);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  useEffect(() => {
    const filtered = partners.filter((partner) =>
      partner.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredPartners(filtered);
  }, [search, partners]);

  if (loading) {
    return (
      <h1 className="text-white text-center text-4xl mt-10">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-center text-3xl mt-10">
        {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-green-400 text-center">
        Gym Partners
      </h1>

      <input
        type="text"
        placeholder="Search Partner..."
        className="mt-8 w-full p-4 rounded-xl bg-gray-800 border border-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {filteredPartners.length === 0 ? (
          <h2>No Partners Found</h2>
        ) : (
          filteredPartners.map((partner) => (
            <PartnerCard
              key={partner._id}
              name={partner.name}
              fitnessLevel={partner.fitnessLevel}
              goal={partner.goal}
              city={partner.city}
            />
          ))
        )}

      </div>
    </div>
  );
}

export default Profile;