import { useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";
import {InfoCard} from "../components/InfoCard";
import PartnerCard from "../components/PartnerCard";
function Profile() {
  const navigate = useNavigate();
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");
  const [filterlevel, setFilterLevel] = useState("all");
  const [filtercity, setFilterCity] = useState("");
  const[partnerName, setPartnerName] = useState("");
  const [partnerGoal, setPartnerGoal] = useState("");
  const [partnerLevel, setPartnerLevel] = useState("");
  const [partnerCity, setPartnerCity] = useState("");

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
  }
  const newPartner = {
    name: partnerName,
     fitnessLevel: partnerLevel,
    goal: partnerGoal,
    city: partnerCity,
  };

  setPartners([...partners, newPartner]);
  setPartnerName("");
 setPartnerLevel("");
 setPartnerGoal("");
 setPartnerCity("");
};
const handleDeletePartner = (partnerName) => {
  setPartners(
    partners.filter((p) => p.name !== partnerName)
  );

  setConnectedPartners(
    connectedPartners.filter(
      (name) => name !== partnerName
    )
  );
};

  return <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center"><h1 className="text-5xl font-bold text-green-400 text-center mb-6">Profile Page</h1>
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

< input type="text" placeholder="Partner Name"
  className="mt-6 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl"
  value={partnerName}
  onChange={(e) => setPartnerName(e.target.value)}
/>
<select
  className="mt-4 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl 
  focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200" 
  type="text"
  placeholder="Fitness Level"
  className="mt-4 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl"
  value={partnerLevel}
  onChange={(e) => setPartnerLevel(e.target.value)}
>
  <option value="beginner">Beginner</option>
  <option value="intermediate">Intermediate</option>
  <option value="advanced">Advanced</option>
</select>
<select
  className="mt-4 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl 
  focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200"
  type="text"
  placeholder="Goal"
  className="mt-4 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl"
  value={partnerGoal}
  onChange={(e) => setPartnerGoal(e.target.value)}
>
  <option value="weight-loss">Weight Loss</option>
  <option value="muscle-gain">Muscle Gain</option>
  <option value="endurance">Endurance</option>
</select>
<input
  type="text"
  placeholder="City"
  className="mt-4 w-96 p-4 bg-gray-700 text-white border border-gray-600 rounded-xl"
  value={partnerCity}
  onChange={(e) => setPartnerCity(e.target.value)}
/>
<button onClick={handleAddPartner}
type="button"
className = "w-96 bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-semibold transition-all text-white mt-4"
> Add Partner </button>

<h2 className="text-3xl font-bold text-green-400"> Available Partners </h2>
<div className="flex flex-wrap justify-center gap-6">
{searchedPartners.length === 0 && (
  <p className="text-gray-400 text-center mt-4">
    No partners found.
  </p>
)}
      {searchedPartners.map((partner, index) => (
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
/>
))}

</div>
<p className="text-gray-400 text-center mt-4">
 Connected with : {connectedPartners.length > 0 ? connectedPartners.join(', ') : 'No one yet.'}
</p>

   </div>
   ;
}

export default Profile;