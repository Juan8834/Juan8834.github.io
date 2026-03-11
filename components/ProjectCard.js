export default function ProjectCard({ title, description, imgSrc, liveUrl }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Live Project →
        </a>
      </div>
    </div>
  );
}
