import { useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";
import {InfoCard} from "../components/InfoCard";
function Profile() {
  const navigate = useNavigate();
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");

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
   </div>
   ;
}

export default Profile;