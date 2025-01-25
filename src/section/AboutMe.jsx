

const AboutMe = () => {
  return (
    <div id="AboutMe" className="p-6 flex flex-col items-center  rounded-2xl  bg-gray-50">
      <h2 className="font-bold text-gray-800 text-center  text-4xl sm:text-5x mt-14 mb-6">AboutMe</h2>
      <p className=" text-gray-600 text-center max-w-3xl text-lg mt-10">
        Hi! I’m a passionate coding student, currently 9 months into my journey of becoming a developer. Over this time, I’ve
        dived into web development, learning technologies like JavaScript, React, and Node.js. I’m excited to keep building
        projects and expanding my skills!
      </p>
      <h3 className="font-semibold text-gray-800 text-center mt-10 text-2xl">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mt-6">
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h4 className="font-medium text-lg">Todo List App</h4>
          <p className="text-gray-600 text-sm mt-2">
            A simple web app for managing tasks, built using React and styled with Tailwind CSS.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h4 className="font-medium text-lg">Weather App</h4>
          <p className="text-gray-600 text-sm mt-2">
            A weather forecasting app fetching live data using APIs and showcasing JavaScript skills.
          </p>
        </div>
      </div>

      <h3 className="font-semibold text-gray-800 text-center mt-10 text-2xl">Future Goals</h3>
      <p className="mt-6 text-gray-600 text-center max-w-3xl text-lg">
        I’m looking forward to mastering backend development with Node.js, learning TypeScript, and building more complex
        projects that solve real-world problems!
      </p>
    </div>
  );
};

export default AboutMe;
