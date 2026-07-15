export const PartnerForm = ({
    partnerName,
setPartnerName ,
partnerLevel,
setPartnerLevel,
partnerGoal,
setPartnerGoal,
partnerCity,
setPartnerCity,
editingPartner,
handleAddPartner
}) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-green-400">
  {editingPartner ? "Edit Partner" : "Add New Partner"}
</h2>
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
<button
  type="button"
  onClick={() =>
    handleAddPartner({
      name: partnerName,
      fitnessLevel: partnerLevel,
      goal: partnerGoal,
      city: partnerCity,
    })
  }
  className="w-96 bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-semibold transition-all text-white mt-4"
>
  {editingPartner ? "Save Changes" : "Add Partner"}
</button>
</div>
    );
} ;