import React from "react";

const Signup = () => (
  <div style={{ padding: 40 }}>
    <h1>Sign Up</h1>
    <form>
      <input type="text" placeholder="Username" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button type="submit">Sign Up</button>
    </form>
  </div>
);

export default Signup;
