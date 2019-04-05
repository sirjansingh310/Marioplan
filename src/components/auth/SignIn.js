import React, { Component } from 'react'
import { signInAction } from '../../store/actions/authAction' 
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
 class SignIn extends Component {
  state = {
      email: '',
      password: ''
  }
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state);   
  }
  render() {
    const { authError, auth } = this.props;    
    if(auth.uid) return <Redirect to = "/" />
    
    return (
      <div className = "container">
        <form onSubmit = {this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" onChange = {this.handleChange} id = "email"/>
            </div>
            <div className="input-field">                
                <label htmlFor="password">Password</label>
                <input type="password" onChange = {this.handleChange} id = "password"/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign In</button>
            </div>
            <div className="red-text center">
              { authError ? <h6>Login Failed</h6> : null}
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credentials) => dispatch(signInAction(credentials))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
