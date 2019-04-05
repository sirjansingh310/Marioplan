import React from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOutAction} from '../../store/actions/authAction';
const SignedInLinks = (props) => {    
    const { profile } = props
    console.log(profile)
    return (
        <ul className="right">
            <li><NavLink to = "/create"> New Project </NavLink></li>
            <li><a onClick = {props.signOut} href = "/"> Log Out </a></li>
            <li><NavLink to = "/" className = "btn btn-floating pink lighten-1"> {profile.initials} </NavLink></li>

        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)