import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
      </header>

      <main className="container mx-auto mt-10 p-4">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-100" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-100" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea id="message" className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-100" placeholder="Your Message" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://via.placeholder.com/24" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://via.placeholder.com/24" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://via.placeholder.com/24" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src="https://via.placeholder.com/24" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
