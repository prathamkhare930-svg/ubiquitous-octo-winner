import { useNavigate } from "react-router-dom";
import { FeatureCard } from "../components/featurecard";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-green-400">FitConnect AI</h1>

      <p className="mt-4 text-lg text-gray-300">
        Find gym partners. Track workouts. Stay consistent.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="btn btn-ghost" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="btn btn-ghost" onClick={() => navigate('/register')}>
          Get Started
        </button>
        </div>
         <div className=" flex gap-6 mt-16 text-center">
        {FeatureCard({ title: "Find Gym Partners" , emoji: "🤖" })}
        {FeatureCard({ title: "Track Your Workouts" , emoji: "💪" })}
        {FeatureCard({ title: "Stay Motivated" , emoji: "🔥" })}

      </div>
    </div>
  );
}

export default Home; 