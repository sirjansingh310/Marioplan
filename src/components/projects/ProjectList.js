import React from 'react'
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';
const ProjectList = (props) => {
    const projects = props.projects ? (props.projects.map(project => {
        return (
            <Link to = { "project/" + project.id} key = {project.id}>
            <ProjectSummary project = {project} key = {project.id}/>
            </Link>
        )
    })
    ): (
        "No projects added"
    ) 
    return(
       <div className="project-list section"> 
            {projects}
       </div>
    )
}
export default ProjectList;