import React from "react";

const Login = () => (
  <div style={{ padding: 40 }}>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Login;
