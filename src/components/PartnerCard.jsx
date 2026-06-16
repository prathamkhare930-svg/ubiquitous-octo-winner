function PartnerCard({ name, fitnessLevel, goal, city, onConnect , isconnected})  {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-96 mt-4 shadow-lg hover:scale-105 transition-all duration-300 text-center">
      <h3 className="text-xl font-bold text-green-400 text-center">
        👤 {name}
      </h3>

      <p>🏋️ Fitness Level: {fitnessLevel}</p>
      <p>🎯 Goal: {goal}</p>
      <p>📍 City: {city}</p>

     <button
  onClick={onConnect}
  className={`px-6 py-2 rounded-xl font-semibold text-white block mx-auto mt-4 ${
    isconnected
      ? "bg-gray-500"
      : "bg-green-600 hover:bg-green-700"
  }`}
>
  {isconnected  ? "Connected ✅" : "Connect"}
</button>
    </div>
  );
}

export default PartnerCard;