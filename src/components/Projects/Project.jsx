import React from 'react'

export const Project = (project) => {
  return (
    <div className="Project">
        <div className="projectHeader">
        <div className="projectTitle">{project.Title}</div>
        <div className="projectSummary">
            {project.Summary}
        </div>
        <div className="refLink">
            <a href={project.url}>View in Browser</a>
            <div className="refLinkSpacer"> / </div>
            <a href={project.gitHubUrl}>
            View on Github
            </a>
        </div>
        </div>
        <a href={project.url} className="projectPic">
        <img src={project.image} className="carouselPic" alt="TOER-store" />
        </a>
        <ul className="projectDetails">
            {project.description.map((item, index) => 
            <li key={index}>{item}</li>)}
        </ul>
    </div>
  )
}
