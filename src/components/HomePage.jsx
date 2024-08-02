import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/hero.jpg'; // Assuming this is used in other sections
import SeniorCare from '../assets/SeniorCare.jpg';
import services1 from '../assets/services1.jpg';
import services2 from '../assets/services2.jpg';
import services3 from '../assets/services3.jpg';
import testimonial1 from '../assets/testimonial1.jpeg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true }); // One-time scroll animations
  }, []);

  return (
    <section className='w-full overflow-x-hidden'>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Services Section */}
      <section id="services" className="container mx-auto py-20">
        <h2 className="text-5xl font-bold text-center mb-12" data-aos="fade-down">
          Our Services
        </h2>
        <div className="flex flex-wrap -mx-4 max-md:justify-center max-md:flex-col max-md:px-6">
          <ServiceCard aos_delay="300" heading="Personalized Care Plans" image={services1}>
            <p>Customizable care plans tailored to individual needs.</p>
          </ServiceCard>
          <ServiceCard aos_delay="400" heading="Professional Caretakers" image={services2}>
            <p>Experienced and compassionate caretakers for your loved ones.</p>
          </ServiceCard>
          <ServiceCard aos_delay="500" heading="24/7 Availability" image={services3}>
            <p>We are always available to provide assistance whenever needed.</p>
          </ServiceCard>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12" data-aos="fade-down">Why Choose Us</h2>
          <section className="flex flex-wrap justify-center items-stretch -mx-4">
            <Chooseus aos_delay="300" heading="Compassionate Care">
              Our caretakers provide compassionate and dedicated care.
            </Chooseus>
            <Chooseus aos_delay="400" heading="Experienced Professionals">
              Our team consists of highly experienced and trained professionals.
            </Chooseus>
            <Chooseus aos_delay="500" heading="24/7 Availability">
              We are always available to provide assistance whenever needed.
            </Chooseus>
          </section>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12" data-aos="fade-down">Testimonials</h2>
          <div className="flex flex-wrap justify-center items-stretch -mx-4">
            <Testimonial aos_delay="300" image={testimonial3} name="Jane Doe">
              "SeniorCare has been a lifesaver. The caretakers are professional and kind."
            </Testimonial>
            <Testimonial aos_delay="400" image={testimonial1} name="John Smith">
              "The personalized care plans have made a huge difference for my mother."
            </Testimonial>
            <Testimonial aos_delay="500" image={testimonial4} name="Emily JOhnson">
              "I highly recommend SeniorCare for anyone needing reliable support."
            </Testimonial>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8" data-aos="fade-up">Ready to Get Started?</h2>
          <p className="text-2xl mb-8" data-aos="fade-up" data-aos-delay="100">
            Join our community and provide the best care for your loved ones.
          </p>
          <Link
            to="/register"
            className="bg-violet-600 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition-transform duration-300"
            data-aos="zoom-in">
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (<>
    <section className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-12 px-5 md:py-16 md:px-18">
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
            data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">
            Register Now
          </Link>
        </div>
        <div className="md:w-5/12" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img
            src={SeniorCare}
            alt="Elderly Care"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  </>);
};

const ServiceCard = ({ aos_delay, heading, children, image }) => {
  return (
    <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay={aos_delay}>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
        <img
          src={image}
          alt="Personalized Care Plans"
          className="w-full h-40 object-contain rounded-t-lg mb-4"
        />
        <h3 className="text-3xl font-bold mb-4">{heading}</h3>
        {children}
      </div>
    </div>
  );
};

const Chooseus = ({ aos_delay, heading, children }) => {
  return (
    <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay={aos_delay}>
      <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
        <h3 className="text-3xl font-bold mb-4">{heading}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

const Testimonial = ({ aos_delay, image, name, children }) => {
  return (
    <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay={aos_delay}>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 h-full">
        <img
          src={image}
          alt="Testimonial 1"
          className="w-16 h-16 object-cover rounded-full mb-4 mx-auto"
        />
        <p className="text-lg mb-2">
          {children}
        </p>
        <h4 className="font-bold">- {name}</h4>
      </div>
    </div>
  );
};

export default HomePage;