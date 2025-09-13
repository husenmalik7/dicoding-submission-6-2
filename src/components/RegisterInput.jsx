import { useState } from 'react';

function RegisterInput({ register }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    register({ name, email, password });
  }

  return (
    <form className="mt-3 flex flex-col gap-2" onSubmit={handleRegister}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        className="rounded-lg border-1 p-2"
      />
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
        Register
      </button>
    </form>
  );
}

export default RegisterInput;
