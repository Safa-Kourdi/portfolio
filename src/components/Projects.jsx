const projects = [
  {
    title: "Balligh (بَلِّغ)",
    description:
      "Graduation project: a public service complaints platform. I built the React front end in a team of 4: around 30 screens, 4 user roles, Arabic RTL layout, and a Spring Boot backend integration.",
    tech: ["React", "Vite", "Material UI", "React Query", "Axios", "Leaflet"],
    link: "https://github.com/Danya-Shwaf/syrian-service-complaints-system",
  },
  {
    title: "Weather App",
    description:
      "Shows current weather for Homs with min/max temperatures and an Arabic/English language toggle.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Safa-Kourdi/weather-app",
  },
  {
    title: "Prayers Timing",
    description:
      "Daily prayer times with a live countdown to the next prayer and a city selector, using the Aladhan API.",
    tech: ["React", "Vite", "REST API"],
    link: "https://github.com/Safa-Kourdi/prayers-timing",
  },
  {
    title: "My Pretty Tasks",
    description:
      "A to-do app to add, edit, delete, and complete tasks, with All / Completed / Incomplete filters.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Safa-Kourdi/beauty-notes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
