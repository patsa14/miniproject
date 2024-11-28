'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        throw new Error('Failed to submit form.');
      }
  
      const data = await response.json();
      console.log('Form Submitted:', data);
      alert('Form submitted successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 bg-gradient-to-l from-sky-700 via-white shadow-lg py-6 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="text-2xl font-bold text-gray-800">UTO Advance</div>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'About', 'Properties', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-900 font-medium hover:text-slate-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-sky-700 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12">
            Have any questions? We'd love to hear from you. Fill out the form
            below.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-white p-10 shadow-xl rounded-xl border border-sky-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                rows="6"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-700 text-white py-3 px-4 rounded-lg hover:bg-sky-600 focus:outline-none transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 UTO Advance Engineering. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
