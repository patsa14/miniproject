'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Properties() {
  const defaultProperties = [
    {
      id: 1,
      name: "Pool Villa",
      location: "Manik - Phuket",
      description: "Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.",
      img: "/images/pool.jpg",
    },
    {
      id: 2,
      name: "Cafe",
      location: "Mueang - Phuket",
      description: "Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.",
      img: "/images/pro1.jpg",
    },
  ];

  const [properties, setProperties] = useState(defaultProperties);

  useEffect(() => {
    // Fetch properties from the API
    async function fetchProperties() {
      try {
        const response = await fetch('/api/admin/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        if (data.length > 0) {
          setProperties(data);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
        // Keep the default properties if the API fails
      }
    }
    fetchProperties();
  }, []);

  return (
    <main className="min-h-screen bg-sky-50">
      {/* Header (Navigation Bar) */}
      <header className="sticky top-0 bg-gradient-to-l from-sky-700 via-white shadow-lg py-6 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            <div className="text-2xl font-bold text-gray-800">UTO Advance</div>
          </div>
          <nav>
  <ul className="flex space-x-6">
    {['Home', 'About', 'Properties', 'Contact'].map((item) => (
      <li key={item}>
        <Link
          href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          className="text-gray-900 font-medium hover:text-slate-500 transition-all"
        >
          {item}
        </Link>
      </li>
    ))}
    <li>
      <Link
        href="/admin/login"
        className="text-red-600 font-medium hover:text-red-800 transition-all"
      >
        Admin
      </Link>
    </li>
  </ul>
</nav>

        </div>
      </header>

      {/* Cover Section */}
      <section
        className="relative bg-cover bg-center h-[400px] text-shadow rounded-xl overflow-hidden shadow-lg mx-4 md:mx-8 mt-5"
        style={{ backgroundImage: "url('/images/inte.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Explore Our Properties</h1>
            <p className="mt-4 text-lg md:text-xl max-w-4xl mx-auto">
              Discover your dream property with us – luxurious, stylish, and conveniently located.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section
        className="relative bg-sky-800 rounded-xl shadow-lg mx-4 md:mx-8 mt-5 mb-10 overflow-hidden"
      >
        <div className="container mx-auto py-10">
          {properties.map((property) => (
            <div
              key={property.id}
              className="mb-12 bg-white p-6 rounded-lg shadow-md border border-gray-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="md:w-1/2">
                  <img
                    src={property.img}
                    alt={property.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-3xl font-semibold text-gray-900">{property.name}</h3>
                  <p className="text-gray-500 uppercase text-sm">{property.location}</p>
                  <p className="text-gray-700">{property.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 UTO Advance Engineering. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {["Facebook", "Instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-sky-400 transition-all duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}