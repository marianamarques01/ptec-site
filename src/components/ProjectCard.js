import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, category }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imgUrl} alt={title} />
        <div className="project-overlay">
          <div className="project-category">{category}</div>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="project-btn"> Saiba Mais</button>
      </div>
    </div>
  )
}
