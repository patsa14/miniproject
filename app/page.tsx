'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';

export default function Home() {
  const [services, setServices] = useState([
    { id: 1, name: "Electrical System", img: "/images/elec.jpg" },
    { id: 2, name: "Water Supply System", img: "/images/water.jpg" },
    { id: 3, name: "Air Conditioning System", img: "/images/air.jpg" },
    { id: 4, name: "Construction Supervision", img: "/images/supervision.jpg" },
  ]);

  return (
    <div>
      {/* Header */}
    <header className="sticky top-0 bg-gradient-to-l from-sky-700 via-white shadow-lg py-6 z-50">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-4">  {/* Added a container for logo and text */}
      <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
      <div className="text-2xl font-bold text-gray-800">UTO Advance</div>
    </div>
    <nav>
  <ul className="flex space-x-6">
    {["Home", "About", "Properties", "Contact"].map((item) => (
      <li key={item}>
        <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-gray-900 font-medium hover:text-slate-500">
          {item}
        </Link>
      </li>
    ))}
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
          <h1 className="text-6xl font-extrabold">Find Your Dream <span className="text-sky-900">Home</span></h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">Discover luxurious properties tailored to your needs.</p>
          <button className="mt-8 px-10 py-4 bg-sky-800 text-gray-300 rounded-full text-xl hover:bg-gray-700">Explore Properties</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="properties" className="py-20 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition">
                <img src={service.img} alt={service.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{service.name}</h3>
                  <button className="mt-4 px-6 py-2 bg-sky-900 text-gray-300 rounded-full hover:bg-gray-700">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
          <form className="max-w-xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <input type="text" id="name" placeholder="Name" className="w-full mb-4 p-3 border rounded-lg" />
            <input type="tel" id="phone" placeholder="Phone" className="w-full mb-4 p-3 border rounded-lg" />
            <input type="email" id="email" placeholder="Email" className="w-full mb-4 p-3 border rounded-lg" />
            <textarea id="message" placeholder="Message" className="w-full mb-4 p-3 border rounded-lg"></textarea>
            <button type="submit" className="w-full bg-sky-800 text-white p-3 rounded-lg hover:bg-gray-700">Submit</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Locations</h2>
          <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400" className="rounded-lg shadow-lg"></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 UTO Advance Engineering. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {["Facebook", "Instagram"].map((platform) => (
              <a key={platform} href="#" className="text-gray-400 hover:text-sky-400">{platform}</a>
            ))}
          </div>
        </div>
      </footer>

  
    </div>
  );
}
