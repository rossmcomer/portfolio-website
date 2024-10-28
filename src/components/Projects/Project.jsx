import React from 'react'

const Project = ({project}) => {
    const imagePath = process.env.PUBLIC_URL + '/projectImages/' + project.Image;
  return (
    <div className="Project">
        <div className="projectHeader">
        <div className="projectTitle">{project.Title}</div>
        <div className="projectSummary">
            {project.Summary}
        </div>
        <div className="refLink">
            <a href={project.Url}>View in Browser</a>
            <div className="refLinkSpacer"> / </div>
            <a href={project.GitHubUrl}>
            View on Github
            </a>
        </div>
        </div>
        <a href={project.Url} className="projectPic">
        <img src={imagePath} className="carouselPic" alt={project.Title} />
        </a>
        <ul className="projectDetails">
            {project.Description.map((item, index) => 
            <li key={index}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Project
