import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault?.();
    // replace with real auth flow
    navigate('/profile');
  };

  const handleGetStarted = (e) => {
    e?.preventDefault?.();
    navigate('/register');
  };

  return (
    <div id="login-page">
      <h1>Login Page</h1>
      <div className="login-actions">
        <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
        <button className="btn btn-ghost" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Login;