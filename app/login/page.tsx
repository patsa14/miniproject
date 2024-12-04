'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // To handle redirection after login

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // To handle loading state
  const router = useRouter(); // To handle redirection after successful login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error before making the request
    setSuccess(''); // Reset success message
    setLoading(true); // Start loading

    // Basic client-side validation
    if (!email || !password) {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    // Optional: validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        setError('');
        console.log('Logged in user:', data.user);
        
        // Store token and username
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.user.name);  // Store the username

        // Redirect to the homepage
        router.push('/'); // Back to Home after login
      } else {
        setError(data.message || 'Login failed, please try again.');
        setSuccess('');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading once the request is done
    }
  };

  // Handle back to home page
  const handleBackToHome = () => {
    router.push('/'); // Redirect to the homepage
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <button
            type="button"
            onClick={handleBackToHome}
            className="px-4 py-2 text-blue-600 hover:text-blue-800"
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}
