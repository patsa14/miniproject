export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="UTO Advance Engineering Logo"
              className="h-10 w-10 object-contain"
            />
            <div className="text-xl font-bold text-gray-800">UTO Advance</div>
          </div>

          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Properties</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-500 h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/company2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center text-white pt-32">
          <h1 className="text-5xl font-semibold">Find Your Dream Home</h1>
          <p className="mt-4 text-lg">Discover luxurious properties tailored to your needs.</p>
          <button className="mt-8 px-8 py-3 bg-yellow-500 text-gray-800 rounded-full text-xl hover:bg-yellow-400">
            Explore Properties
          </button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { id: 1, name: "Electrical system", img: "/images/elec.jpg" },
              { id: 2, name: "Water supply system", img: "/images/water.jpg" },
              { id: 3, name: "Air conditioning system", img: "/images/air.jpg" },
            ].map((property) => (
              <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={property.img} alt={property.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{property.name}</h3>
                  <button className="mt-4 px-6 py-2 bg-yellow-500 text-gray-800 rounded-full hover:bg-yellow-400">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 UTO Advance Engineering. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
