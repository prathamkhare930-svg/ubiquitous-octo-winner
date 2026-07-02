import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = (e) => {
  e.preventDefault();

  console.log({
    email,
    password,
  });
localStorage.setItem("isLoggedIn", "true");
  navigate("/profile");
};
  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div id="login-page " className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8 caret-amber-200 ">Login Here 💪</h1>
      <p className="text-gray-400 mt-2 mb-8 text-center">
  Welcome back! Continue your fitness journey.
     </p>
      <form
  onSubmit={handleLogin}
  className="flex flex-col gap-4 mt-6  w-105 p-8  bg-gray-800 rounded-lg shadow-lg "
>
        <div className="mb-4">
       
          <input 
            type="email"
            id="email"
            className="
w-full p-4
bg-gray-700
text-white
border border-gray-600
rounded-xl
focus:outline-none
focus:ring-2
focus:ring-green-500
transition-all
"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          
          <input
            type="password"
            id="password"
            className="
w-full p-4
bg-gray-700
text-white
border border-gray-600
rounded-xl
focus:outline-none
focus:ring-2
focus:ring-green-500
transition-all
"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           </div>
          <button type="submit" className="
w-full
bg-green-600
hover:bg-green-700
p-4
rounded-xl
font-semibold
transition-all
text-white
"  >
          Log In </button>
        
        
        </form>
       
      <p className="text-center text-gray-400 mt-4">
  Don't have an account?
  <span
    className="text-green-400 cursor-pointer ml-2"
    onClick={handleGetStarted}
  >
    Register
  </span>
</p>
         </div>
       
        
  );
}

export default Login;