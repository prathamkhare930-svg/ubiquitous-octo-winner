function PartnerCard({
  name,
  fitnessLevel,
  goal,
  city,
  onEdit,
  onDelete,
}) {
  return (
    <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300">

      {/* Edit Button */}
      <button
        onClick={onEdit}
        className="absolute top-3 right-3 bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-lg"
      >
        ✏️
      </button>

      {/* Delete Button */}
      <button
        onClick={onDelete}
        className="absolute top-3 left-3 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg"
      >
        🗑️
      </button>

      <h2 className="text-2xl font-bold text-green-400 mb-4">
        👤 {name}
      </h2>

      <p className="mb-2">
        🏋️ <span className="font-semibold">Fitness Level:</span>{" "}
        {fitnessLevel}
      </p>

      <p className="mb-2">
        🎯 <span className="font-semibold">Goal:</span>{" "}
        {goal}
      </p>

      <p>
        📍 <span className="font-semibold">City:</span>{" "}
        {city}
      </p>
    </div>
  );
}

export default PartnerCard;