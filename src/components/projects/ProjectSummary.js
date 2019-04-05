import React from 'react'
import moment from 'moment'
const ProjectSummary = (props) => {
    return(
        <div className="card z-depth-0 project-list">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{ props.project.title }</span>
                        <p>Posted by { props.project.authorFirstName} {props.project.authorLastName}</p>
                        <p className="grey-text">{ moment(props.project.createdAt.toDate()).format("MMMM Do YYYY, hh:mm a") }</p>
                    </div>
            </div>
    )
}
export default ProjectSummary;