function PartnerCard({
  name,
  fitnessLevel,
  goal,
  city,
}) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300">

      <h2 className="text-2xl font-bold text-green-400 mb-4">
        👤 {name}
      </h2>

      <p className="mb-2">
        🏋️ <span className="font-semibold">Fitness Level:</span> {fitnessLevel}
      </p>

      <p className="mb-2">
        🎯 <span className="font-semibold">Goal:</span> {goal}
      </p>

      <p>
        📍 <span className="font-semibold">City:</span> {city}
      </p>

    </div>
  );
}

export default PartnerCard;