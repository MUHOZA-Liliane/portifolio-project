

import Liliane from "../assets/Liliane.jpg";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-yellow-900 via-yellow-100 to-blue-500 rounded-xl text-white "
    >
      <div className="text-center px-6 sm:px-8 mt-24">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-black">
          Hi, I am Liliane MUHOZA 👋
        </h1>
        <p className="text-lg sm:text-lg mb-6 max-w-2xl mx-auto text-black">
          I’m a passionate developer specializing in building intuitive web applications that solve real-world problems. Let’s create something amazing together!
        </p>

        <div className="flex justify-center mb-6">
          <img
            src={Liliane}
            alt="Liliane"
            className="w-40 h-40 sm:w-80 sm:h-80 rounded-full shadow-lg"
          />
        </div>

        <div className="flex justify-center space-x-4">
          {/* Link to  Section */}
          <a
            href="#AboutMe"
            className="px-6 py-3 bg-lime-600 text-white rounded-md shadow-lg hover:bg-lime-500 transition duration-300"
          >
            Learn More
          </a>

          {/* Link to Skills Section */}
          <a
            href="#skills"
            className="px-6 py-3 bg-g-700 text-white rounded-md shadow-lg hover:bg-gray-600 transition duration-300"
          >
            View Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
