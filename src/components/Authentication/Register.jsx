import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'family',
  });

  const navigate = useNavigate();

  const onChange = useCallback((e) => setFormData({ ...formData, [e.target.name]: e.target.value }), []);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { name: formData.name, email: formData.email, role: formData.role };

    sessionStorage.setItem("careuser", JSON.stringify({
      name: user.name,
      email: user.email,
      role: user.role
    }));

    navigate(formData.role === 'family' ? '/dashboard' : '/caretaker-dashboard');
  };

  const goToLogin = () => {
    navigate('/login');
  };



  return (
    <div className="flex items-center justify-center min-h-screen py-6 px-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Register</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <RegisterField label="Name" type="name" value={formData.name} placeholder="Enter your name" onChange={onChange}/>
          <RegisterField label="Email" type="email" value={formData.email} placeholder="Enter your email" onChange={onChange} />
          <RegisterField label="Password" type="password" value={formData.password} placeholder="Enter password" onChange={onChange} />
          <label htmlFor="role" className="block text-gray-600 mb-1">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          >
            <option value="family">Family Member</option>
            <option value="caretaker">Care Taker</option>
          </select>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Register
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">Already have an account?</p>
            <button
              onClick={goToLogin}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const RegisterField = memo(({ label, type, placeholder, onChange }) => {
  return <>
    <label htmlFor={type} className="block text-gray-600 mb-1">{label}</label>
    <input
      type={type == "name" ? "text" : type}
      id={type}
      name={type}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
      required
    />
  </>
});

export default Register;
