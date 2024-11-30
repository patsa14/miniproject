'use client';

import React, { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [services] = useState([
    { id: 1, name: "Electrical System", img: "/images/elec.jpg" },
    { id: 2, name: "Water Supply System", img: "/images/water.jpg" },
    { id: 3, name: "Air Conditioning System", img: "/images/airr.jpg" },
    { id: 4, name: "Design and Drafting", img: "/images/design.jpg" },
  ]);

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 bg-gradient-to-l from-sky-700 via-white shadow-lg py-6 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            <div className="text-2xl font-bold text-gray-800">UTO Advance</div>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {["Home", "About", "Properties", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-900 font-medium hover:text-slate-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {/* Login Button in Navbar */}
              <li>
                <Link href="/login">
                  <button className="px-4 py-2 bg-sky-900 text-white rounded-md hover:bg-gray-700">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/company2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto text-center text-white pt-40">
          <h1 className="text-6xl font-extrabold">
            Find Your Dream <span className="text-sky-900">Home</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Discover luxurious properties tailored to your needs.
          </p>
          {/* Add Login Button in Hero Section */}
          <div className="mt-8">
            <Link href="/login">
              <button className="px-6 py-3 bg-sky-900 text-white text-lg rounded-full hover:bg-gray-700">
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Register Now</h2>
          <form
            className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-lg"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              const formData = new FormData(e.target);
              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                password: formData.get("password"),
              };
              console.log("Form Data:", data);
              alert("Registration submitted successfully!");
              // You can also send this data to an API using fetch() or axios here
            }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-900"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-900"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-900"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-sky-900 text-white rounded-lg hover:bg-gray-700"
            >
              Register
            </button>
          </form>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
              >
                <img src={service.img} alt={service.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{service.name}</h3>
                  <Link href={`/services/${service.id}`}>
  <button className="mt-4 px-6 py-2 bg-sky-900 text-gray-300 rounded-full hover:bg-gray-700">
    View Details
  </button>
</Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Locations Section */}
      <section id="locations" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Locations</h2>
          <p className="text-gray-700 mb-8">Find us in the most convenient locations around the city.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="400"
            className="rounded-lg shadow-lg border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Contact Info</h3>
          <p className="text-gray-600 mb-6">We’d love to hear from you. Reach out to us through any of the following:</p>
          <div className="flex flex-col space-y-4 items-center">
            <p className="text-lg font-medium text-gray-700">
              <strong>Phone:</strong> +66 98 947 9155 <br /> +66 98 764 7897
            </p>
            <p className="text-lg font-medium text-gray-700">
              <strong>Email:</strong> Utoadvance@gmail.com
            </p>
            <p className="text-lg font-medium text-gray-700">
              <strong>Office Address:</strong> 123/112 Saransiri(koh kaew), Mueang, Phuket 83000
            </p>
          </div>
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
