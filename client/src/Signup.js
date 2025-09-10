import React, { useState } from "react";
import axios from "axios";

function Signup({ onSignup, switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [err, setErr] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/signup", { email, password, username });
      onSignup(res.data.user);
      localStorage.setItem("token", res.data.token);
    } catch {
      setErr("Signup failed");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={signup}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
        <button type="submit">Sign Up</button>
      </form>
      {err && <div style={{ color: "red" }}>{err}</div>}
      <p>
        Already have an account? <button onClick={switchToLogin}>Login</button>
      </p>
    </div>
  );
}

export default Signup;