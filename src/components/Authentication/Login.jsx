import React, { memo, useCallback, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { authState } from '../../atoms/authState';
import { caretakersState } from '../../atoms/caretakersState';
import { familyState } from '../../atoms/familyState';
import { MdEmojiFoodBeverage } from 'react-icons/md';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'family' });
  const [loginfailure, setLoginfailure] = useState(false);
  const setAuthState = useSetRecoilState(authState);
  const caretakers = useRecoilValue(caretakersState);
  const families = useRecoilValue(familyState);
  const navigate = useNavigate();

  const onChange = useCallback((e) => setFormData({ ...formData, [e.target.name]: e.target.value }), []);

  const onSubmit = (e) => {
    e.preventDefault();

    // First check from session storage
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user && user.email == formData.email) {
      setAuthState({ isAuthenticated: true, user });
      navigate(user.role === 'family' ? '/dashboard' : '/caretaker-dashboard');
    }

    // If not in session storage, then check from API
    else {
      if (formData.role === 'family') {
        const foundFamily = families.find(family => family.email === formData.email);
        if (foundFamily) {
          setAuthState({ isAuthenticated: true, user: foundFamily });
          navigate('/dashboard');
        } else {
          setLoginfailure(true);
        }
      } else {
        const foundCaretaker = caretakers.find(caretaker => caretaker.email === formData.email);
        if (foundCaretaker) {
          setAuthState({ isAuthenticated: true, user: foundCaretaker });
          navigate('/caretaker-dashboard');
        } else {
          setLoginfailure(true);
        }
      }
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };



  return (
    <div className="flex items-center justify-center min-h-screen py-6 px-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Login</h2>
        {loginfailure ? <p className="block text-red-600 text-sm mb-1">
          Username doesn't exist
        </p> : <></>}
        <form onSubmit={onSubmit} className="space-y-6">
          <LoginField type="email" label="Email" placeholder="Enter your email" value={formData.email} onChange={onChange} />
          <LoginField type="password" label="Password" placeholder="Enter your password" value={formData.password} onChange={onChange} />
          <label htmlFor="role" className="block text-gray-600 mb-1">Role</label>
          <select id='role'
            name='role'
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

const LoginField = memo(({ type, label, placeholder }) => {
  return <>
    <label htmlFor={type} className="block text-gray-600 mb-1">{label}</label>
    <input
      type={type}
      id={type}
      name={type}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
      required
    />
  </>
});

export default Login;
