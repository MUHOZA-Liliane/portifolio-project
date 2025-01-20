


import AboutMe from "../section/AboutMe";
import ContactMe from "../section/ContactMe";
import Hero from "../section/Hero";
import Skills from "../section/Skills"


const Home = () => {
  return (
    <main>
      <section
            id="Home"
         
            className="h-screen flex items-center justify-center bg-gray-100"
          >
            <div className="text-center px-4 sm:px-8">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
                Welcome to My Portfolio

              
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Explore my work, skills, and passion for building exceptional web experiences. Scroll down to learn more!
              </p> 
            </div>
          </section>
      
     <AboutMe/>
     <Hero/>
     <Skills/>
     <ContactMe/>

    </main>
  );
};

export default Home  


