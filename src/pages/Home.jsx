import AboutMe from "../section/AboutMe";
import Hero from "../section/Hero";
import Skills from "../section/Skills";
import ContactMe from "../section/ContactMe";
const Home = () => {
  return (
    <main>
      <section
        id="Home"
        className="h-screen flex items-center justify-center text-black  py-10 hover-bg-red-700  bg-gray-50 "
      >
        <div className="text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-black mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto">
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
