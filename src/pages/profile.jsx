import { useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";
import {InfoCard} from "../components/InfoCard";
import PartnerCard from "../components/PartnerCard";
import { PartnerForm } from "../components/partnerForm";
import StatsCard from "../components/StatsCard";
function Profile() {
  const navigate = useNavigate();
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");
  const [filterlevel, setFilterLevel] = useState("all");
  const [filtercity, setFilterCity] = useState("");
  const [filterName , setFilterName] = useState("");
  const[partnerName, setPartnerName] = useState("");
  const [partnerGoal, setPartnerGoal] = useState("");
  const [partnerLevel, setPartnerLevel] = useState("");
  const [partnerCity, setPartnerCity] = useState("");
  const[editingPartner, setEditingPartner] = useState(null);

  const handleLogout = () => {
    navigate('/login');
  }
  const handleSave = () => {
    localStorage.setItem('fitnessLevel', fitnessLevel);
    localStorage.setItem('goal', goal);
    localStorage.setItem('city', city);
    console.log({
      fitnessLevel: localStorage.getItem('fitnessLevel'),
      goal: localStorage.getItem('goal'),
      city: localStorage.getItem('city')
    });
  };
  useEffect(() => {
    const savedFitnessLevel = localStorage.getItem('fitnessLevel');
    const savedGoal = localStorage.getItem('goal');
    const savedCity = localStorage.getItem('city');
    if (savedFitnessLevel) {
      setFitnessLevel(savedFitnessLevel);
    }
    if (savedGoal) {
      setGoal(savedGoal);
    }
    if (savedCity) {
      setCity(savedCity);
    }
  }, []);
const [connectedPartners, setConnectedPartners] = useState(() => {
  return JSON.parse(localStorage.getItem("connectedPartners")) || [];
});

useEffect(() => {
  localStorage.setItem(
    "connectedPartners",
    JSON.stringify(connectedPartners)
  );
}, [connectedPartners]);
 
 const [partners, setPartners] = useState(() => {
  const savedPartners = JSON.parse(
    localStorage.getItem("partners")
  );

  if (savedPartners && savedPartners.length > 0) {
    return savedPartners;
  }

  return [
    {
      name: "Alice",
      fitnessLevel: "Intermediate",
      goal: "Build Muscle",
      city: "New York",
    },
    {
      name: "Bob",
      fitnessLevel: "Beginner",
      goal: "Lose Weight",
      city: "Los Angeles",
    },
    {
      name: "Charlie",
      fitnessLevel: "Advanced",
      goal: "Maintain Fitness",
      city: "Chicago",
    },
  ];
});

useEffect(() => {
  localStorage.setItem(
    "partners",
    JSON.stringify(partners)
  );
}, [partners]);

  const filteredPartners =
  filterlevel === "all"
    ? partners
    : partners.filter(
        (partner) =>
          partner.fitnessLevel.toLowerCase() === filterlevel
      );

const searchedPartners = filteredPartners.filter(
  (partner) =>
    partner.city.toLowerCase().includes(
      filtercity.toLowerCase()
    )
);
const handleAddPartner = () => {
  if (!partnerName || !partnerLevel || !partnerGoal || !partnerCity) {
    alert("Please fill in all fields to add a partner.");
    return;
  } if ( editingPartner) {
    const updatedPartners = partners.map((p) =>
  p.name === editingPartner
    ? {
        ...p,
        name: partnerName,
        fitnessLevel: partnerLevel,
        goal: partnerGoal,
        city: partnerCity,
      }
    : p
);
setPartners(updatedPartners);
setConnectedPartners(
  connectedPartners.map((name) =>
    name === editingPartner ? partnerName : name
  )
);
setEditingPartner(null);
setPartnerName("");
setPartnerLevel("");
setPartnerGoal("");
setPartnerCity("");
  } 
  else {
     const newPartner = {
      name: partnerName,
      fitnessLevel: partnerLevel,
      goal: partnerGoal,
      city: partnerCity,
    };

    setPartners([...partners, newPartner]);
  }
  setPartnerName("");
  setPartnerLevel("");
  setPartnerGoal("");
  setPartnerCity("");
   };
const handleDeletePartner = (partnerName) => {
   if (!window.confirm("Are you sure you want to delete this partner?")) {
  return;
}
  setPartners(
    partners.filter((p) => p.name !== partnerName)
  );

  setConnectedPartners(
    connectedPartners.filter(
      (name) => name !== partnerName
    )
  );
};

const finalPartners = searchedPartners.filter(
  (partner) =>
    partner.name.toLowerCase().includes(
      filterName.toLowerCase()
    )
);

  return (
     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-green-400 text-center mb-6">
        Profile Page</h1>
  <p className=" text-2xl text-gray-400 mb-6 text-center">
  Tell us about your fitness journey.
</p>
  <form className = "bg-gray-800 p-8 rounded-xl w-96 mx-auto shadow-lg">
    <label className="block text-gray-300 mb-2">Fitness Level</label>
    <select
      className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200"
      value={fitnessLevel}
      onChange={(e) => setFitnessLevel(e.target.value)}
    >
      <option value="">Select Fitness Level</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select> 

     <select
    className="  mt-4 w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200"
    value={goal}
    onChange={(e) => setGoal(e.target.value)}
    >
      <option value="">Select Goal</option>
      <option value="lose weight">Lose Weight</option>
      <option value="build muscle">Build Muscle</option>
      <option value="maintain fitness">Maintain Fitness</option>
      <option value="strength training">Strength Training</option>
    </select>

    < input type = "text" placeholder = "City" className = " mt-4 w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200" value={city} onChange={(e) => setCity(e.target.value)}></input>

    <InfoCard className="bg-amber-50 p-4 rounded-xl" title="Fitness Level" value={fitnessLevel} />
    <InfoCard className="bg-amber-50 p-4 rounded-xl" title="Goal" value={goal} />
    <InfoCard  className="bg-amber-50 p-4 rounded-xl" title="City" value={city} />
  </form>
  
 <button
  type="button"
  onClick={handleSave}
  className="w-96 bg-green-600 hover:bg-green-700 p-4 rounded-xl font-semibold transition-all text-white mt-4"
>  Save Profile</button>
  <button type="button" onClick = {handleLogout} className ="w-96 bg-red-600 hover:bg-red-700 p-4 rounded-xl font-semibold transition-all text-white mt-4">
    Logout
</button>
<select
  className="mt-6 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl 
  focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200"
  value={filterlevel}
  onChange={(e) => setFilterLevel(e.target.value)}
>
  <option value="all">All Levels</option>
  <option value="beginner">Beginner</option>
  <option value="intermediate">Intermediate</option>
  <option value="advanced">Advanced</option>
</select>

<input type="text" placeholder="Filter by City"
  className="mt-6 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl 
  focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200"
  value={filtercity}
  onChange={(e) => setFilterCity(e.target.value)}
/>
<input 
type="text"
placeholder = "filter by name"
className = "mt-4 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl"
value={filterName}
onChange={(e) => setFilterName(e.target.value)}
/>
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

  handleAddPartner={handleAddPartner}
/>
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
  key={index}
  name={partner.name}
  fitnessLevel={partner.fitnessLevel}
  goal={partner.goal}
  city={partner.city}
  isConnected={connectedPartners.includes(partner.name)}
  onConnect={() => {
    if (connectedPartners.includes(partner.name)) {
      setConnectedPartners(
        connectedPartners.filter(
          (name) => name !== partner.name
        )
      );
    } else {
      setConnectedPartners([
        ...connectedPartners,
        partner.name,
      ]);
    }
  }}
 onDelete={() => handleDeletePartner(partner.name)}

 onEdit={()=> {
  setEditingPartner(partner.name);
  setPartnerName(partner.name);
  setPartnerLevel(partner.fitnessLevel);
  setPartnerGoal(partner.goal);
  setPartnerCity(partner.city);
 }}
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