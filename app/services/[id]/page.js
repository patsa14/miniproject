'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const servicesData = [
  {
    id: 1,
    name: "Electrical System",
    img: "/images/elec.jpg",
    description:
      "Our Electrical System services provide reliable and safe installations, maintenance, and upgrades for residential, commercial, and industrial needs.",
    gallery: [
      "/images/elec2.jpg",
      "/images/elec3.jpg",
      "/images/elec5.jpg",
      "/images/elec6.jpg",
    ],
  },
  {
    id: 2,
    name: "Water Supply System",
    img: "/images/water.jpg",
    description:
      "We ensure clean and efficient water supply systems for homes and businesses, including installation and repair.",
    gallery: [
      "/images/water2.jpg",
      "/images/water8.jpg",
      "/images/water7.jpg",
      "/images/water6.jpg",
    ],
  },
  {
    id: 3,
    name: "Air Conditioning System",
    img: "/images/airr.jpg",
    description:
      "Our Air Conditioning System services offer cooling solutions tailored to your comfort and energy efficiency needs.",
    gallery: [
      "/images/air2.jpg",
      "/images/air3.jpg",
      "/images/air4.jpg",
      "/images/air5.jpg",
    ],
  },
  {
    id: 4,
    name: "Design and Drafting",
    img: "/images/design.jpg",
    description:
      "Our Design and Drafting services create detailed plans and blueprints tailored to your project's requirements.",
    gallery: [
      "/images/design2.jpg",
      "/images/design3.jpg",
      "/images/design4.jpg",
      "/images/design5.jpg",
    ],
  },
];

export default function ServiceDetail() {
  const router = useRouter();
  const [serviceId, setServiceId] = useState(null); // Track the service ID
  const [isClient, setIsClient] = useState(false); // Ensure useRouter runs only on the client

  useEffect(() => {
    // This will ensure that router is only accessed on the client-side
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (router.query.id) {
      // Ensure the id exists in the query params before parsing it
      const parsedId = parseInt(router.query.id, 10);
      setServiceId(parsedId); // Set the service ID from the query param
    }
  }, [router.query.id]);

  if (!isClient || serviceId === null) {
    return <div>Loading...</div>; // Ensure loading state until client-side rendering
  }

  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold text-red-600">Service Not Found</h1>
        <p className="text-lg mt-4">The requested service does not exist.</p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-3 bg-sky-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 lg:px-20">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="relative w-full h-[400px]">
          <img
            src={service.img}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">{service.name}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Additional Information */}
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose This Service?
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>High-quality, professional work guaranteed.</li>
              <li>Expert technicians with years of experience.</li>
              <li>Customized solutions for every client.</li>
              <li>Affordable and transparent pricing.</li>
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${service.name} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => router.back()}
            className="mt-8 px-6 py-3 bg-sky-800 text-white rounded-lg shadow-lg hover:bg-sky-700 transition duration-300 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
