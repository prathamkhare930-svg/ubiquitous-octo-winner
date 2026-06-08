import { useState } from "react";
function Register() {
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

  return (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold text-green-400">Create Account</h1>
    <p className="mt-4 text-lg text-gray-300">
      Join FitConnect AI and start your fitness journey today!
    </p>
   <form onSubmit = {handleSubmit} className="flex flex-col gap-4 mt-6 w-96 p-8 bg-gray-800 rounded-lg shadow-lg ">
  <input
    type="text"
    placeholder="Username"
    className="p-3 border rounded-lg shadow-lime-200 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />

  <input
    type="email"
    placeholder="Email"
    className="p-3 border rounded-lg shadow-lime-200 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="password"
    placeholder="Password"
    className="p-3 border rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lime-200 "
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />

  <button
    type="submit"
    className="bg-green-600 p-3 rounded-lg text-white font-bold hover:bg-green-700 transition-all duration-300"
  >
    Register
  </button>
</form>

    </div>
  )
}
export default Register;