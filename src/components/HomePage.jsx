import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/hero.jpg'; // Assuming this is used in other sections

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true }); // One-time scroll animations
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-12 px-5 md:py-16 md:px-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-10 md:mb-0" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-sans" style={{ color: '#FFFFFF' }}>
        Welcome to SeniorCare
      </h1>
      <p className="text-md md:text-xl mb-6 font-normal" style={{ color: '#FFE4E1' }}>
        Providing the best care and support for your loved ones with personalized solutions.
      </p>
      <Link
        to="/register"
        className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 font-medium hover:bg-pink-600 hover:scale-110 hover:shadow-xl"
        data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200"
      >
        Register Now
      </Link>
    </div>
    <div className="md:w-1/2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <img
        src="https://via.placeholder.com/500x300"
        alt="Elderly Care"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>


      {/* Our Services Section */}
      <div id="services" className="container mx-auto py-20">
        <h2 className="text-5xl font-bold text-center mb-12" data-aos="fade-down">
          Our Services
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Personalized Care Plans"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-3xl font-bold mb-4">Personalized Care Plans</h3>
              <p>Customizable care plans tailored to individual needs.</p>
            </div>
          </div>
          <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Professional Caretakers"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-3xl font-bold mb-4">Professional Caretakers</h3>
              <p>Experienced and compassionate caretakers for your loved ones.</p>
            </div>
          </div>
          <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="500">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
              <img
                src="https://via.placeholder.com/500x300"
                alt="24/7 Availability"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-3xl font-bold mb-4">24/7 Availability</h3>
              <p>We are always available to provide assistance whenever needed.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12" data-aos="fade-down">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center items-stretch -mx-4">
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
                <h3 className="text-3xl font-bold mb-4">Compassionate Care</h3>
                <p>Our caretakers provide compassionate and dedicated care.</p>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
                <h3 className="text-3xl font-bold mb-4">Experienced Professionals</h3>
                <p>Our team consists of highly experienced and trained professionals.</p>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
                <h3 className="text-3xl font-bold mb-4">24/7 Availability</h3>
                <p>We are always available to provide assistance whenever needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12" data-aos="fade-down">Testimonials</h2>
          <div className="flex flex-wrap justify-center items-stretch -mx-4">
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
                <img
                  src={heroImage}
                  alt="Testimonial 1"
                  className="w-16 h-16 rounded-full mb-4 mx-auto"
                />
                <p className="text-lg mb-2">
                  "SeniorCare has been a lifesaver. The caretakers are professional and kind."
                </p>
                <h4 className="font-bold">- Jane Doe</h4>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
                <img
                  src={heroImage}
                  alt="Testimonial 2"
                  className="w-16 h-16 rounded-full mb-4 mx-auto"
                />
                <p className="text-lg mb-2">
                  "The personalized care plans have made a huge difference for my mother."
                </p>
                <h4 className="font-bold">- John Smith</h4>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
                <img
                  src={heroImage}
                  alt="Testimonial 3"
                  className="w-16 h-16 rounded-full mb-4 mx-auto"
                />
                <p className="text-lg mb-2">
                  "I highly recommend SeniorCare for anyone needing reliable support."
                </p>
                <h4 className="font-bold">- Emily Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8" data-aos="fade-up">Ready to Get Started?</h2>
          <p className="text-2xl mb-8" data-aos="fade-up" data-aos-delay="100">
            Join our community and provide the best care for your loved ones.
          </p>
          <Link
            to="/register"
            className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition-transform duration-300"
            data-aos="zoom-in"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SeniorCare. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
