import {combineReducers} from 'redux'
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firebaseReducer } from 'react-redux-firebase'; // for firebase including auth
import { firestoreReducer } from 'redux-firestore'; // for firestore db
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, // will sync data in components wherever firestoreConnect higher order component is used.
    firebase: firebaseReducer
})

export default rootReducer