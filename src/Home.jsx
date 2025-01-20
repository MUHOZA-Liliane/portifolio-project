


import Button from './Button';
const Home = () => {
  return (
    <section
      id="Home"
      className="h-screen flex items-center justify-center bg-gray-100"
    >
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore my work, skills, and passion for building exceptional web experiences. Scroll down to learn more!
        </p>
        
        <div className="flex justify-center mt-6">
          <Button text="Get Started" href="#about" />
        </div>
    </section>
  );
};

export default Home;
