import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      username,
      email,
      password,
    });
  };
  const handleLogin = (e) => {
  e.preventDefault();
  navigate("/login");
  };

  return (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold text-green-400">Create Account</h1>
    <p className="mt-4 text-lg text-gray-300">
      Join FitConnect AI and start your fitness journey today!
    </p>
   <form onSubmit = {handleSubmit} className="flex flex-col gap-4 mt-6 w-105 p-8 bg-gray-800 rounded-2xl shadow-2xl ">
  <input
    type="text"
    placeholder="Username"
   className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />

  <input
    type="email"
    placeholder="Email"
    className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="password"
    placeholder="Password"
    className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lime-200 "
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />

  <button
    type="submit"
   className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-xl font-semibold transition-all"
  >
    Register
  </button>
</form>
<p className="text-center text-gray-400 mt-4">
  Already have an account?
  <span
    className="text-green-400 cursor-pointer ml-2"
    onClick={handleLogin}
  >
    Login
  </span>
</p>
    </div>
  )
}
export default Register;