import React from 'react';

const ProductsPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Our Products</h1>
        </div>
      </header>

      <main className="container mx-auto mt-10 p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="Product 1" className="w-full h-auto mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Product 1</h2>
            <p className="text-lg mb-4">This is a brief description of Product 1. It's a great product that you'll love!</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Buy Now</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="https://images.unsplash.com/photo-1493236272120-200db0da1927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="Product 2" className="w-full h-auto mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Product 2</h2>
            <p className="text-lg mb-4">This is a brief description of Product 2. It's a fantastic product that you'll enjoy!</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Buy Now</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="https://images.unsplash.com/photo-1499096382193-ebb232527fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt="Product 3" className="w-full h-auto mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">Product 3</h2>
            <p className="text-lg mb-4">This is a brief description of Product 3. It's a wonderful product that you'll find useful!</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Buy Now</button>
          </div>
          {/* Add more product cards as needed */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH--J-ZMUg8puNfUxE6YXQi3yVHuAORDxow&s" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://i.pinimg.com/474x/f7/1f/fb/f71ffb7ad7db43ccc7b1466de418f254.jpg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuUugy9nMh2cxW9-jcc6wO1-2giGTHWjjAQ&s" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
