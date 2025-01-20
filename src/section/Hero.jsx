
import Liliane from "../assets/Liliane.jpg"; 
const Hero = () => {
  return (
    <section
      id="Hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-xl text-white"
    >
      <div className="text-center px-4 sm:px-8">
  
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 ">
          Hi, I am Liliane MUHOZA 👋
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-gray-300">
          I’m a passionate developer specializing in building intuitive web applications that solve real-world problems. Let's create something amazing together!
        </p>

        <div className="flex justify-center mb-6">
          <img
            src={Liliane}
            alt="Liliane"
            className="w-40 h-40 sm:w-80 sm:h-80 rounded-full shadow-lg"
          />
        </div>

   
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="px-6 py-3 bg-lime-600 text-white rounded-md shadow-lg hover:bg-lime-500 transition duration-300"
          >
            Learn More
          </a>
          <a
            href="#skills"
            className="px-6 py-3 bg-gray-700 text-white rounded-md shadow-lg hover:bg-gray-600 transition duration-300"
          >
            View Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

