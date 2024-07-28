import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { authState } from '../../atoms/authState';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const setAuthState = useSetRecoilState(authState);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // This is a placeholder for actual authentication logic
    // Here, we just assume login is successful for demonstration
    const user = { email, role: 'family', name: 'John Doe' }; // This should be fetched from a real backend

    setAuthState({ isAuthenticated: true, user });
    navigate(user.role === 'family' ? '/dashboard' : '/caretaker-dashboard');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-6 px-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Login</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">Don't have an account?</p>
            <button
              onClick={goToRegister}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
