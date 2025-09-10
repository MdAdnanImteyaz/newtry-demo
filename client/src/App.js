import React, { useState } from "react";
import Feed from "./Feed";
import Login from "./Login";
import Signup from "./Signup";
import Upload from "./Upload";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  if (!user) {
    return (
      <div>
        {showLogin ? (
          <Login onLogin={setUser} switchToSignup={() => setShowLogin(false)} />
        ) : (
          <Signup onSignup={setUser} switchToLogin={() => setShowLogin(true)} />
        )}
      </div>
    );
  }

  return (
    <div>
      <h2>Instagram Clone</h2>
      <button onClick={() => setUser(null)}>Logout</button>
      <Upload user={user} />
      <Feed user={user} />
    </div>
  );
}

export default App;