import { useNavigate } from "react-router-dom";

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
         <div className="mt-16 text-center">
        <h2 className="mt-16 text-4xl text-amber-300">why fit connect ai?</h2>
        <p className="mt-4 text-lg text-gray-300">
          find gym partner nearby </p>
          <p className="mt-4 text-lg text-gray-300">
          track your workout and progress </p>
          <p className="mt-4 text-lg text-gray-300">
          stay consistent and motivated </p>

      </div>
    </div>
  );
}

export default Home;