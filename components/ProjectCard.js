export default function ProjectCard({
  title,
  description,
  imgSrc,
  liveUrl,
  githubUrl
}) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-buttons">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Live Demo →
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button secondary"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}