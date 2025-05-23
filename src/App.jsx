import React from "react";
import "./App.css"; // Import your separate Tailwind-based styles
import './index.css';

const App = () => {
  return (
    <div className="container">
      <div className="left-panel"></div>

      <div className="right-panel">
        <div className="login-box">
          <div className="header">
            <div className="title">MEDI-PANEL</div>
            <img src="/logo.png" alt="Logo" className="logo" />
          </div>

          <h2 className="login-heading">ADMIN LOGIN</h2>

          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />

          <div className="submit-wrap">
            <button className="submit-btn">Submit</button>
          </div>

          <p className="forgot">Forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default App;
