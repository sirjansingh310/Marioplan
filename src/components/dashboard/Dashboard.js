import React, { Component } from 'react'
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render(){
        const { auth } = this.props
        
        if (!auth.uid) return <Redirect to ='/login' / >
        return(
            <div className="dashboard container">
               <div className="row">
                   <div className="col s12 m5">
                       <ProjectList projects = { this.props.projects }/>
                   </div>
                   <div className="col s12 m5 offset-m1">
                       <Notifications notifications = {this.props.notifications}/>
                   </div>
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects',orderBy: ['createdAt', 'desc'] },
      { collection: 'notifications', limit: 5,orderBy: ['time', 'desc']}
    ])
  )(Dashboard)
  