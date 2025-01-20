
const skillsData = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "CSS", level: "Advanced" },
  { name: "HTML", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "Git/GitHub", level: "Advanced" },
];

const Skills = () => {
  return (
    <section id="Skills" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-500 p-4 rounded-lg shadow-md text-center"
            >
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="text-sm text-black">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

