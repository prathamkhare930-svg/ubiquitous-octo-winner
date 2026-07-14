import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { InfoCard } from "../components/InfoCard";
import PartnerCard from "../components/PartnerCard";
import { PartnerForm } from "../components/partnerForm";
import StatsCard from "../components/StatsCard";
const [partnerName, setPartnerName] = useState("");
const [partnerLevel, setPartnerLevel] = useState("beginner");
const [partnerGoal, setPartnerGoal] = useState("weight-loss");
const [partnerCity, setPartnerCity] = useState("");

const [connectedPartners, setConnectedPartners] = useState([]);

function Profile() {
  const navigate = useNavigate();

  // ===========================
  // STATES
  // ===========================

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [showPartnerForm, setShowPartnerForm] = useState(false);

  const [editingPartner, setEditingPartner] = useState(null);
const filteredPartners = partners.filter((partner) =>
  partner.name.toLowerCase().includes(search.toLowerCase())
);
  // ===========================
  // FETCH PARTNERS
  // ===========================

  const fetchPartners = async () => {
  try {
    setLoading(true);

    const response = await axios.get(
      "http://localhost:5000/api/partners"
    );

    console.log(response.data);

    setPartners(response.data.partners);

  } catch (err) {
    console.log("ERROR:", err);
    console.log("MESSAGE:", err.message);
    console.log("RESPONSE:", err.response);

    setError("Failed to fetch partners");
  } finally {
    setLoading(false);
  }
};
  // ===========================
  // PAGE LOAD
  // ===========================

  useEffect(() => {
    fetchPartners();
  }, []);

  // ===========================
  // ADD PARTNER
  // ===========================

  const handleAddPartner = async (partnerData) => {
  try {
    await axios.post(
      "http://localhost:5000/api/partners",
      partnerData
    );

    await fetchPartners();

    setPartnerName("");
    setPartnerLevel("beginner");
    setPartnerGoal("weight-loss");
    setPartnerCity("");

    setShowPartnerForm(false);
  } catch (err) {
    console.log(err);
  }
};

  // ===========================
  // DELETE PARTNER
  // ===========================

  const handleDeletePartner = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/partners/${id}`
      );

      fetchPartners();
    }catch(err){
   console.log(err.response);
   console.log(err.message);
}
  };

  // ===========================
  // EDIT BUTTON
  // ===========================

  const handleEditClick = (partner) => {
    setEditingPartner(partner);
    setShowPartnerForm(true);
  };

  // ===========================
  // SAVE EDIT
  // ===========================

  const handleSaveEdit = async (updatedPartner) => {
    try {
      await axios.put(
        `http://localhost:5000/api/partners/${editingPartner._id}`,
        updatedPartner
      );

      fetchPartners();

      setEditingPartner(null);
      setShowPartnerForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // FILTER
  // ===========================

  const filteredPartners = partners.filter((partner) =>
    partner.name.toLowerCase().includes(search.toLowerCase())
  );

  // ===========================
  // LOADING
  // ===========================

  if (loading) {
    return (
      <div className="text-center text-2xl mt-10 text-white">
        Loading...
      </div>
    );
  }

  // ===========================
  // ERROR
  // ===========================

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        {error}
      </div>
    );
  }
  return (
     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-green-400 text-center mb-6">
        Profile Page</h1>
  <p className=" text-2xl text-gray-400 mb-6 text-center">
  Tell us about your fitness journey.
</p>
  

<input
  type="text"
  placeholder="Search Partner"
  className="mt-6 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<button
  onClick={() => {
    setEditingPartner(null);
    setShowPartnerForm(true);
  }}
  className="bg-green-600 px-5 py-3 rounded-xl mt-5"
>
  + Add Partner
</button>
{showPartnerForm && (
  <PartnerForm
    partnerName={partnerName}
    setPartnerName={setPartnerName}

    partnerLevel={partnerLevel}
    setPartnerLevel={setPartnerLevel}

    partnerGoal={partnerGoal}
    setPartnerGoal={setPartnerGoal}

    partnerCity={partnerCity}
    setPartnerCity={setPartnerCity}

    editingPartner={editingPartner}

    handleAddPartner={
      editingPartner
        ? handleSaveEdit
        : handleAddPartner
    }
  />
)}
<div className="flex justify-center gap-6 my-8 flex-wrap">

<div className="flex justify-center gap-6 my-8 flex-wrap">
<StatsCard title="Total Partners" value={partners.length} icon="👥"/>
<StatsCard title="Connected" value={connectedPartners.length} icon="🤝" />
<StatsCard title="Showing" value={finalPartners.length} icon="🔍" />
</div>

  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-44 text-center shadow-lg">
    <h3 className="text-lg font-semibold text-green-400">
      🔍 Showing
    </h3>
    <p className="text-3xl font-bold mt-2">
      {finalPartners.length}
    </p>
  </div>

</div>
<h2 className="text-3xl font-bold text-green-400"> Available Partners </h2>
<div className="flex flex-wrap justify-center gap-6">
{searchedPartners.length === 0 && (
  <p className="text-gray-400 text-center mt-4">
    No partners found.
  </p>
)}
      {finalPartners.map((partner, index) => (
 <PartnerCard
  key={partner._id}
  name={partner.name}
  fitnessLevel={partner.fitnessLevel}
  goal={partner.goal}
  city={partner.city}
  onDelete={() => handleDeletePartner(partner._id)}
  onEdit={() => handleEditClick(partner)}
/>
))}

</div>
<p className="text-gray-400 text-center mt-4">
 Connected with : {connectedPartners.length > 0 ? connectedPartners.join(', ') : 'No one yet.'}
</p>

   </div>
   );
  }
export default Profile;