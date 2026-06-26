function PartnerCard({ name, fitnessLevel, goal, city, onConnect , isConnected , onDelete , onEdit })  {
  return (
    <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 w-96 mt-4 shadow-lg hover:scale-105 transition-all duration-300 text-center">
      <h3 className="text-xl font-bold text-green-400 text-center">
        👤 {name}
      </h3>

      <p>🏋️ Fitness Level: {fitnessLevel}</p>
      <p>🎯 Goal: {goal}</p>
      <p>📍 City: {city}</p>

      <button 
      onClick={onEdit}
      type="button"
      className={"absolute top-3 right-3 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg text-sm font-semibold"}
     >✏️
      </button> 

      <button
    onClick={onConnect}
    type ="button"
    className={` w-full px-6 py-2 rounded-xl font-semibold text-white block mx-auto mt-4 ${
    isConnected
      ? "bg-red-600 hover:bg-red-700"
      : "bg-green-600 hover:bg-green-700"
     }`}
    >{isConnected ? "Disconnect ❌" : "Connect"}
     </button>

  <button
  type = "button"
 
  onClick={() => {
    console.log("Delete clicked");
    onDelete();
  }}
   className={"absolute top-3 left-3 bg-gray-500 hover:border-gray-700 text-white px-3 py-1 rounded-lg text-sm font-semibold"}
>
  🗑️
</button>
    </div>
  );
}

export default PartnerCard;