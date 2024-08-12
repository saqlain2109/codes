import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto mt-10 p-4">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            We started our journey in 2020 with the vision of creating exceptional web experiences.
            Our team is dedicated to designing and developing websites that are not only functional but also visually stunning.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to empower businesses and individuals with the tools they need to succeed in the digital world.
            We strive to deliver high-quality solutions that drive results and help our clients achieve their goals.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-lg">
            We are a group of passionate designers, developers, and strategists who love what we do.
            Our team works collaboratively to bring your ideas to life and ensure that your project is a success.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
