import { useState } from 'react';

function LoginInput({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <form onSubmit={handleLogin} className="mt-3 flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="rounded-lg border-1 p-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="rounded-lg border-1 p-2"
      />
      <button className="cursor-pointer rounded-lg bg-blue-950 p-2 text-white" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginInput;
