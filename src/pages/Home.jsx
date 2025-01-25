import AboutMe from "../section/AboutMe";
import Hero from "../section/Hero";
import Skills from "../section/Skills";
import ContactMe from "../section/ContactMe";
const Home = () => {
  return (
    <main>
      <section
        id="Home"
        className="h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-blue-100 via-grey-100 to-red-100 rounded-xl text-white "
      >
        <div className="text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my work, skills, and passion for building exceptional web
            experiences. Scroll down to learn more!
          </p>
        </div>
      </section>
      <Hero />
      <AboutMe />
      <div className="mt-20">
        <Skills />
      </div>
      <div className="mt-20">
        <ContactMe />
      </div>
      <footer />
    </main>
  );
};
export default Home;
