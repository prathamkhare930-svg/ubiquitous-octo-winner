import { useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";
function Profile() {
  const navigate = useNavigate();
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goal, setGoal] = useState("");

  const handleLogout = () => {
    navigate('/login');
  }
  const handleSave = () => {
    localStorage.setItem('fitnessLevel', fitnessLevel);
    localStorage.setItem('goal', goal);
    console.log({
      fitnessLevel: localStorage.getItem('fitnessLevel'),
      goal: localStorage.getItem('goal')
    });
  };
  useEffect(() => {
    const savedFitnessLevel = localStorage.getItem('fitnessLevel');
    const savedGoal = localStorage.getItem('goal');
    if (savedFitnessLevel) {
      setFitnessLevel(savedFitnessLevel);
    }
    if (savedGoal) {
      setGoal(savedGoal);
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

     <input 
    type= "text"
    placeholder="Goal"
    className=" mt-4 w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200"
    value={goal}
    onChange={(e) => setGoal(e.target.value)}
    >
    </input>
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