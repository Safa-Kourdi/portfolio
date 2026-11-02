const groups = [
  {
    title: "Front-End",
    items: ["React", "JavaScript", "HTML", "CSS", "Material UI"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "REST APIs", "Axios", "React Query"],
  },
  {
    title: "Other Languages",
    items: ["Java", "Python", "C++"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
