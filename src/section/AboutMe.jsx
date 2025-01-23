



import Card from "../components/Card";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import python from "../assets/python.png";
import github  from "../assets/github.png";
const AboutMe = () => {
  return (
    <div id="AboutMe" className="p-5 flex flex-col items-center rounded-xlg mt-14 ">
      <h2 className=" font-bold text-gray-800 mt-20 text-4xl sm:text-6xl">About Me</h2> 
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-7 w-full max-w-5xl mt-40">
        <Card imageUrl={js} title={"JavaScript"} description={"Advanced"} />
        <Card imageUrl={react} title={"React"} description={"Advanced"} />
        <Card imageUrl={node} title={"Node.js"} description={"Intermediate"} />
        <Card imageUrl={css} title={"CSS"} description={"Advanced"} />
        <Card imageUrl={html} title={"html"} description={"Advanced"} />
        <Card imageUrl={python} title={"Python"} description={"Intermediate"} />
        <Card imageUrl={github} title={"GitHub"} description={"Advanced"} />
      </div>
    </div>
  );
};

export default AboutMe;
