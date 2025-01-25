
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
    <div id="Skills" className="p-4 flex flex-col items-center rounded-2xl  bg-gray-50">
      <h2 className="font-bold text-gray-800 text-center text-3xl sm:text-4xl mt-28"> My Skills</h2>
      <div className="grid grid-cols-7 gap-4 w-full max-w-6xl mt-12">
        <Card imageUrl={js} title={"JavaScript"} description={"Advanced"} />
        <Card imageUrl={react} title={"React"} description={"Advanced"} />
        <Card imageUrl={node} title={"Node.js"} description={"Intermediate"} />
        <Card imageUrl={css} title={"CSS"} description={"Advanced"} />
        <Card imageUrl={html} title={"HTML"} description={"Advanced"} />
        <Card imageUrl={python} title={"Python"} description={"Intermediate"} />
        <Card imageUrl={github} title={"GitHub"} description={"Advanced"} />
      </div>
    </div>
  );
};

export default Skills;
