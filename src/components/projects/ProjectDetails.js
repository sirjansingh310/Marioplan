import React from 'react';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import moment from 'moment'
const ProjectDetails = (props) => {
    const { project, auth} = props;
    if(!auth.uid) return <Redirect to = '/login' / >
    if(project){
        return(<div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{ project.title }</span>
                <p>{ project.content }</p>
            </div>
            <div className="card-action grey lighten-4 text-grey">
                <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                <div>{ moment(props.project.createdAt.toDate()).format("MMMM Do YYYY, hh:mm a")}</div>
            </div>
        </div>
    </div> 
    )
    }
    else{
        return(
            <div className="container center">
                Loading Project ...
            </div>
        )
    }
}
const matchStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id;
    return{
        project: state.firestore.data.projects ? state.firestore.data.projects[id] : null,
        auth: state.firebase.auth
    }
}
export default compose(
 connect(matchStateToProps),
 firestoreConnect([
     {collection: 'projects'}
 ])
)(ProjectDetails)