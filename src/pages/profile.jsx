import { useEffect, useState } from "react";
import axios from "axios";
import PartnerCard from "../components/PartnerCard";
import { PartnerForm } from "../components/partnerForm";

function Profile() {

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [editingPartner, setEditingPartner] = useState(null);

const [partnerLevel, setPartnerLevel] =
  useState("beginner");

const [partnerGoal, setPartnerGoal] =
  useState("weight-loss");

const [partnerCity, setPartnerCity] =
  useState("");

const [showPartnerForm, setShowPartnerForm] =
  useState(false);

  const fetchPartners = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/partners"
      );

      setPartners(response.data.partners);

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
  const handleAddPartner = async (partnerData) => {
  try {
    await axios.post(
      "http://localhost:5000/api/partners",
      partnerData
    );

    fetchPartners();

    setPartnerName("");
    setPartnerLevel("beginner");
    setPartnerGoal("weight-loss");
    setPartnerCity("");

    setShowPartnerForm(false);

  } catch (err) {
    console.log(err);
  }
};const handleEditClick = (partner) => {
  setEditingPartner(partner);

  setPartnerName(partner.name);
  setPartnerLevel(partner.fitnessLevel);
  setPartnerGoal(partner.goal);
  setPartnerCity(partner.city);

  setShowPartnerForm(true);
};
const handleSaveEdit = async (partnerData) => {
  try {
    await axios.put(
      `http://localhost:5000/api/partners/${editingPartner._id}`,
      partnerData
    );

    fetchPartners();

    setEditingPartner(null);

    setPartnerName("");
    setPartnerLevel("beginner");
    setPartnerGoal("weight-loss");
    setPartnerCity("");

    setShowPartnerForm(false);

    alert("Partner Updated Successfully!");

  } catch (err) {
    console.log(err);
  }
};
  const filteredPartners = partners.filter((partner) =>
    partner.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <h1 className="text-white text-center mt-10 text-3xl">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-center mt-10 text-3xl">
        {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-green-400 text-center">
        Gym Partners
      </h1>
      <button
  onClick={() => setShowPartnerForm(true)}
  className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold"
>
  + Add Partner
</button>
{
  showPartnerForm && (
    <PartnerForm
      partnerName={partnerName}
      setPartnerName={setPartnerName}

      partnerLevel={partnerLevel}
      setPartnerLevel={setPartnerLevel}

      partnerGoal={partnerGoal}
      setPartnerGoal={setPartnerGoal}

      partnerCity={partnerCity}
      setPartnerCity={setPartnerCity}

      editingPartner={ !! editingPartner}

     handleAddPartner={
  editingPartner
    ? handleSaveEdit
    : handleAddPartner
}
    />
  )
}

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
  onEdit={() => handleEditClick(partner)}
  onDelete={() => handleDeletePartner(partner._id)}
/>
          ))
        )}

      </div>

    </div>
  );
}

export default Profile;