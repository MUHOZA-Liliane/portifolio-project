
import Card from "../components/Card";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import python from "../assets/python.png";
import github from "../assets/github.png";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="p-6 flex flex-col items-center bg-slate-300 rounded-xl text-black"
    >
      <h2 className="font-bold text-gray-800 text-center text-3xl sm:text-4xl mt-14">
        My Skills
      </h2>
      {/* Wrapper for the grid */}
      <div className="grid grid-cols-5 gap-6 w-full max-w-6xl mt-12">
        {/* First row: 5 cards */}
        <div className="w-40 mx-auto">
          <Card imageUrl={js} title={"JavaScript"} description={"Advanced"} />
        </div>
        <div className="w-40 mx-auto">
          <Card imageUrl={react} title={"React"} description={"Advanced"} />
        </div>
        <div className="w-40 mx-auto">
          <Card imageUrl={node} title={"Node.js"} description={"Intermediate"} />
        </div>
        <div className="w-40 mx-auto">
          <Card imageUrl={css} title={"CSS"} description={"Advanced"} />
        </div>
        <div className="w-40 mx-auto">
          <Card imageUrl={html} title={"HTML"} description={"Advanced"} />
        </div>

        {/* Second row: 2 cards */}
        <div className="w-40 mx-auto">
          <Card imageUrl={python} title={"Python"} description={"Intermediate"} />
        </div>
        <div className="w-40 mx-auto">
          <Card imageUrl={github} title={"GitHub"} description={"Advanced"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;



