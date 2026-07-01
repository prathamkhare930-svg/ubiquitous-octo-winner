function StatsCard({ title, value, icon , onClick }) {
  return (
    <div 
    onClick={onClick}
    className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-44 text-center shadow-lg cursor-pointer hover:shadow-green-400 transition-all duration-300">
      <h3 className="text-lg font-semibold text-green-400">
        {icon} {title}
      </h3>

      <p className="text-4xl font-bold text-white mt-3">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;