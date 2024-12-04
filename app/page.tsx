'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [loggedOut, setLoggedOut] = useState(false); 
  const router = useRouter();
  const [services] = useState([
    { id: 1, name: "Electrical System", img: "/images/elec.jpg" },
    { id: 2, name: "Water Supply System", img: "/images/water.jpg" },
    { id: 3, name: "Air Conditioning System", img: "/images/airr.jpg" },
    { id: 4, name: "Design and Drafting", img: "/images/design.jpg" },
  ]);
 
  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername); // Set the username
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    // Update the state to reflect logout
    setUsername(null);  // This will remove the username from the UI
    setLoggedOut(true);  // Show logout message
  };

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
            <ul className="flex space-x-6 items-center">
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
               {/* Sign In and Sign Up Buttons */}
               <li>
                <div className="flex space-x-4">
                  {!username ? (
                    <>
                      <Link href="/login">
                        <button className="px-4 py-2 border bg-white border-gray-400 text-black rounded-md hover:bg-gray-100">
                          Sign in
                        </button>
                      </Link>

                      <Link href="/register">
                        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                          Sign up
                        </button>
                      </Link>
                    </>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-700"
                    >
                      Logout
                    </button>
                  )}
                </div>
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
        </div>
      </section>

      {/* Display welcome message with a beautiful design */}
      {username && (
        <section id="welcome-message" className="py-12 bg-gradient-to-r from-sky-600 via-white-600 to-slate-600">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-4xl font-extrabold mb-4">
              Welcome back, <span className="text-black">{username}</span>!
            </h2>
            <p className="text-xl font-light">We are glad to have you back with us.</p>
          </div>
        </section>
      )}

      {/* Show logout message after logout */}
      {loggedOut && (
        <section id="logout-message" className="py-12 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">You have successfully logged out!</h2>
            <p className="text-lg text-sky-300">We hope to see you again soon.♡</p>
          </div>
        </section>
      )}

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