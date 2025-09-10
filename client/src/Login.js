import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin, switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password });
      onLogin(res.data.user);
      localStorage.setItem("token", res.data.token);
    } catch {
      setErr("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
        <button type="submit">Login</button>
      </form>
      {err && <div style={{ color: "red" }}>{err}</div>}
      <p>
        No account? <button onClick={switchToSignup}>Sign up</button>
      </p>
    </div>
  );
}

export default Login;