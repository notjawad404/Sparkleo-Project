import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, username } = response.data;
      console.log(response.data);

      if (token) {
        localStorage.setItem('Token', token);
        console.log(localStorage.getItem('Token'));
      }
      if (username) {
        localStorage.setItem('username', username);
        console.log(localStorage.getItem('username'));
      }
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
    
  };

  return (
    <form onSubmit={handleLogin}>
      <label className="block mb-2 text-gray-700 font-medium">Email*</label>
      <input
        type="email"
        placeholder="mail@sinnmple.com"
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block mb-2 text-gray-700 font-medium">Password*</label>
      <input
        type="password"
        placeholder="Min. 8 characters"
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center text-gray-700 text-sm">
          <input type="checkbox" className="mr-2" />
          Keep me logged in
        </label>
        <a href="#" className="text-red-500 text-sm">Forget password?</a>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition duration-300"
      >
        Sign In
      </button>

      <p className="mt-6 text-center text-gray-500">
        Not registered yet?{' '}
        <a href="#" className="text-red-500 font-medium">Create an Account</a>
      </p>
    </form>
  );
}

export default LoginForm;
