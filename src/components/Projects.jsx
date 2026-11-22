const projects = [
  {
    title: "Balligh (بَلِّغ)",
    description:
      "Graduation project: a public service complaints platform. I built the React front end in a team of 4: around 30 screens, 4 user roles, Arabic RTL layout, and a Spring Boot backend integration.",
    tech: ["React", "Vite", "Material UI", "React Query", "Axios", "Leaflet"],
    link: "https://github.com/Danya-Shwaf/syrian-service-complaints-system",
  },
  {
    title: "Ibtisama Dental Clinic (عيادة ابتسامة)",
    description:
      "A practice full-stack website for a dental clinic with Arabic RTL layout and 3 roles (patient, nurse, doctor). Patients book appointments with double-booking prevention and leave verified reviews, the doctor gets a daily schedule, and staff publish stories with image uploads, likes, and comments. Secured with Firestore rules.",
    tech: [
      "React",
      "Vite",
      "Firebase Auth",
      "Firestore",
      "Material UI",
      "Cloudinary",
    ],
    link: "https://github.com/Safa-Kourdi/dental-clinic",
    demo: "https://dental-clinic-delta-rust.vercel.app",
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
              <div className="project-links">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
