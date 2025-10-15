function ProjectItem({ name, about, technologies, image }) {
  return (
    <div className="project-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
